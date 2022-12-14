import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  issueForm: any = []

  constructor(private builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: '',
      description: '',
      priority: '',
      type: ''
    });

  }

}
