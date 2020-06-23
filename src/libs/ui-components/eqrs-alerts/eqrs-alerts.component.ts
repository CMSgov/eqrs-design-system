import { Component, OnInit, AfterViewChecked, AfterViewInit,Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alerts-message',
  templateUrl: './eqrs-alerts.component.html',
  styleUrls: ['./eqrs-alerts.component.scss']
})
export class EqrsAlertsComponent implements AfterViewInit, AfterViewChecked {

  @Input() heading: string;
  @Input() alertType: string;
  @Input() alertMessages: Array<any> = [];
  prevAlertMessages = [];
  

  alertError: string = "error";
  alertWarning: string = "warning";
  alertSuccess: string = "success";
  alertInformation: string = "information";

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked() {
    if (this.alertMessages && this.prevAlertMessages.length != this.alertMessages.length || this.diffArray()) {
      this.prevAlertMessages = this.alertMessages;
    }
  }

  diffArray() {
    if (this.alertMessages && (this.alertMessages.filter(item => this.prevAlertMessages.indexOf(item) < 0).length > 0
      || this.prevAlertMessages.filter(item => this.alertMessages.indexOf(item) < 0).length > 0)) {
      return true;
    }
    return false;
  }

  ngAfterViewInit(): void {
  }

  getAlertMessages() {
    let messages: string[] = [];

    if (this.alertMessages) {
      this.alertMessages.forEach((alertMessage) => {
        if (typeof alertMessage === "string") {
          messages.push(alertMessage);
        }
        else {
          messages.push(alertMessage.message)
        }
      });
    }

    return messages;
  }

}
