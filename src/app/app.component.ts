import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Include RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular';
}

// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterModule],
//   template: `
//     <div class="container-fluid">
//       <div class="row">
//         <!-- Sidebar -->
//         <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
//           <div class="position-sticky">
//             <h2 class="sidebar-heading p-3">TNDocManager</h2>
//             <ul class="nav flex-column">
//               <li class="nav-item">
//                 <a class="nav-link active" routerLink="/home" routerLinkActive="active">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" routerLink="/upload" routerLinkActive="active">File Upload</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" routerLink="/edicompare" routerLinkActive="active">CUSDEC & CUSRES Compare </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" routerLink="/Task2" routerLinkActive="active">Task 2</a>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <!-- Main content -->
//         <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <router-outlet></router-outlet>
//         </main>
//       </div>
//     </div>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'TNDocManager';
// }
