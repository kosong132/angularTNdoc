import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import JSZip from 'jszip';

@Component({
  selector: 'app-edi-list',
  templateUrl: './edi-file-list.component.html',
  styleUrls: ['./edi-file-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class EdiListComponent implements AfterViewInit {
  ediDataList: any[] = [];
  recipientEmail: string = '';
  selectAllFlag: boolean = false;
  emailValidationMessage: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { ediDataList: any[] };
    console.log('Navigation State:', navigation);

    if (state?.ediDataList) {
      this.ediDataList = state.ediDataList;
    } else {
      console.warn('No data received. Please upload a file first.');
    }
  }

  async validateEmail(): Promise<void> {
    if (!this.recipientEmail) {
      this.emailValidationMessage = '⚠ Please enter a recipient email.';
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:8080/api/edi-generator/validate-email?email=${this.recipientEmail}`
      );
      const data = await response.json();
  
      if (data.valid) {
        this.emailValidationMessage = `✅ Email is valid. Username: ${data.username}`;
        console.log(`✅ Email exists: ${this.recipientEmail}, Username: ${data.username}`);
  
        // Automatically call printSelected when email is valid
        await this.printSelected();
      } else {
        this.emailValidationMessage = '❌ Email does not exist. Please enter a valid email.';
        console.warn(`❌ Email not found: ${this.recipientEmail}`);
      }
    } catch (error) {
      console.error('Error validating email:', error);
      this.emailValidationMessage = '❌ Error validating email. Please try again.';
    }
  }
  
  async printSelected(): Promise<void> {
    const selectedEntries = this.ediDataList.filter((data) => data.selected);
  
    if (selectedEntries.length === 0) {
      alert('No files selected.');
      return;
    }
  
    try {
      console.log('Generating EDI-formatted ZIP file...');
      const zip = new JSZip();
  
      selectedEntries.forEach((entry, index) => {
        // Generate the EDI file content without extra spaces
        const ediContent = [
          `ISA*00*          *00*          *ZZ*TNG9           *01*003897733TEST  *${entry.formattedShipmentDateYYMMDD}*${entry.formattedShipmentTimeHHMM}*U*00401*000000012*0*T*^`,
          `GS*QM*TNG9*003897733STS*${entry.shipmentDate}*${entry.shipmentTime}*38*X*004010`,
          `ST*214*00011`,
          `B10*${entry.DONumber}*${entry.shipmentNumber}*TNG9`,
          `L11*OUT*8X`,
          `L11*${entry.shipmentNumber}*SI`,
          `L11*DTD*QY`,
          `L11*G2*SL`,
          `N1*SF*HP PPS SALES`,
          `N3*1*TIONG NAM`,
          `N4*SHAH ALAM*SL*40400*MY`,
          `G62*88*${entry.shipmentDate}*W*${entry.shipmentTime}*08`,
          `N1*ST*${entry.consigneeName}`,
          `N3*${entry.consigneeAddress1}*${entry.consigneeAddress2}`,
          `N4*${entry.consigneeCity}*${entry.consigneeStateCode}**${entry.consigneePostalCode}*MY`,
          `MS3*TNG9*${entry.routingCode}*MY*J`,
          `LX*1`,
          `AT7*${entry.shipmentStatusCode}*NS*${entry.shipmentDate}*${entry.shipmentTime}*08`,
          `PRF*TN422227MY`,
          `SE*24*00011`,
          `GE*1*38`,
          `IEA*1*000000012`,
        ].join('\n'); // Joins lines without extra spaces
  
        // Generate unique filename
        const fileName = `EDI-${entry.shipmentDate}-${entry.shipmentNumber}-UploadedFile#426-TN-EDI#${60000 + index}-${entry.DONumber}.txt`;
  
        zip.file(fileName, ediContent);
      });
  
      // Convert ZIP to Blob
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      console.log('ZIP file generated successfully.');
  
      // Create form data
      const formData = new FormData();
      formData.append('zipFile', zipBlob, 'EDI_Files.zip');
      formData.append('email', this.recipientEmail);
  
      console.log('Sending email with ZIP attachment...');
      const response = await fetch('http://localhost:8080/api/edi-generator/send-email', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error('Failed to send the email:', error);
      alert('❌ Failed to send the email.');
    }
  }
  
  selectAllCheckboxes(): void {
    this.ediDataList.forEach((data) => (data.selected = this.selectAllFlag));
  }

  ngAfterViewInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { ediDataList: any[] };
    console.log('Navigation State:', navigation);

    if (state?.ediDataList) {
      this.ediDataList = state.ediDataList;
    } else {
      console.warn('No data received. Please upload a file first.');
    }
  }
}
