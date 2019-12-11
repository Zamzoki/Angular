import { Component, OnInit } from '@angular/core';

class BaseLog {
  logName: string;

  constructor(name: string) {
    this.logName = name;
  }

  log : (message: string) => void = message => {
    console.log(`${this.logName}: ${message}`);
  }
}

class Logger extends BaseLog {
  constructor(name: string) {
    super(name);
  }

  writeLine: (message: string) => void = message => {
    super.log(`\n${message}`);
  }
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let baseLog = new BaseLog('BaseLog');
    baseLog.log('Logging from base class');

    let logger = new Logger('ChildLog');
    logger.writeLine('Logging from child class');
  }

}
