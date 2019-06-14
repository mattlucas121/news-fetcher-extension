import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // since only one tab should be active and in the current window at once
      // the return variable should only have one entry
      var activeTab = tabs[0];
      var activeTabId = activeTab.id; // or do whatever you need
      console.log(activeTab.id);
      console.log(activeTab.url);
      console.log(activeTab);
    });
  }
}
