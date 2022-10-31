import {Injectable} from '@angular/core';
import {Issue} from "./issue";

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues: Issue[] = [];

  constructor() {
  }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

  getCompletedIssues(): Issue[] {
    return this.issues.filter(issue => issue.completed);
  }

  addIssue(issue: Issue) {
    this.issues.push(issue);
  }

  deleteIssue(issue: Issue) {
    this.issues = this.issues.filter(i => i !== issue);
  }

  updateIssue(issue: Issue) {
    this.issues = this.issues.map(i => i === issue ? issue : i);
  }

  getIssues(): Issue[] {
    return this.issues;
  }
}
