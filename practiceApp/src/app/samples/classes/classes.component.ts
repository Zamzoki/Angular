import { Component, OnInit } from '@angular/core';

class BaseLog {
  logName: string;

  constructor(name: string) {
    this.logName = name;
  }

  log(message: string): void {
    console.log(`${this.logName}: ${message}`);
  }

  logWords(callback: (time: number, word: string) => void, ...words: string[]) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < words.length; i++) {
      callback(5, words[i]);
    }
  }

  timeout(time: number, word: string): void {
    setTimeout(() => {
      console.log(word);
    }, time);
  }
}

class Logger extends BaseLog {
  constructor(name: string) {
    // child class constructor MUST call base class constructor
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
    const baseLog = new BaseLog('BaseLog');
    baseLog.log('Logging from base class');
    baseLog.logWords(baseLog.timeout, 'dog', 'cat', 'mouse');

    const logger = new Logger('ChildLog');
    logger.writeLine('Logging from child class');
  }

}
