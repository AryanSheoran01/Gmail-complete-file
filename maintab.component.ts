import { Component } from '@angular/core';

@Component({
  selector: 'app-maintab',
  templateUrl: './maintab.component.html',
  styleUrls: ['./maintab.component.css']
})
export class MaintabComponent {
  emails: any[] = [
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', content: 'Hi, Let\'s meet tomorrow at 2 PM.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    { sender: 'jane.smith@example.com', subject: 'Project Update', content: 'The project is progressing well.' },
    // Add more email data as needed
  ];

  selectedEmail: any;

  selectEmail(email: any): void {
    this.selectedEmail = email;
  }

}

