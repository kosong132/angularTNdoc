import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import JSZip from 'jszip';

@Component({
  selector: 'app-edi-list',
  templateUrl: './edi-file-list.component.html',
  styleUrls: ['./edi-file-list.component.css'],
  standalone:true,
 imports: [CommonModule, FormsModule],})
export class EdiListComponent {
  excelData: any[] = []; // Replace with fetched data from the backend
  recipientEmail: string = '';
  selectAllFlag: boolean = false;

  constructor() {
    // Sample data for demonstration; replace with actual API call
    this.excelData = [
      { shipmentNumber: 'SN001', shipmentDate: '2023-12-20', DONumber: 'DO123', selected: false },
      { shipmentNumber: 'SN002', shipmentDate: '2023-12-21', DONumber: 'DO124', selected: false },
    ];
  }

  selectAllCheckboxes() {
    this.excelData.forEach((data) => (data.selected = this.selectAllFlag));
  }

  async printSelected() {
    if (!this.recipientEmail) {
      alert('Please provide a recipient email.');
      return;
    }

    const zip = new JSZip();
    const selectedEntries = this.excelData.filter((data) => data.selected);

    if (selectedEntries.length === 0) {
      alert('No files selected.');
      return;
    }

    selectedEntries.forEach((entry, index) => {
      const content = `EDI Content for ${entry.shipmentNumber}`;
      const fileName = `EDI-${entry.shipmentDate}-${entry.shipmentNumber}.txt`;
      zip.file(fileName, content);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const formData = new FormData();
    formData.append('zipFile', zipBlob, 'EDI_Files.zip');
    formData.append('email', this.recipientEmail);

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Email sent successfully.');
        } else {
          alert('Error sending email.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send the email.');
      });
  }
}
