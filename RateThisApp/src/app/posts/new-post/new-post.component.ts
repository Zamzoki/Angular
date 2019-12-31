import {Component} from '@angular/core';
import {IPost} from '..';
import {PostServices} from '../../services';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-post-component',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  // tslint:disable-next-line:variable-name
    private _canLeave = false;
    newEvent: IPost;
    descriptionRegex = /^[a-zA-Z0-9, ]*$/;
    timeRegex = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]|^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/;
    dateRegex = /(([1-2][0-9])|(0[1-9])|(3[0-1]))-((1[0-2])|(0[1-9]))-([0-9]{4})$/;

    constructor(private postServices: PostServices, private router: Router) {

    }

    get canLeave() {
        return this._canLeave;
    }

    set canLeave(value: boolean) {

        if (value === undefined) {
            throw new Error('Provide a boolean value');
        }

        this._canLeave = value;
    }

    hasTimeFormat(value: string) {
      return this.timeRegex.test(value);
    }

    hasDateFormat(value: string) {
      return this.dateRegex.test(value);
    }

    hasValidCharacters(value: string) {
      if (value === null || value === undefined) {
        return true;
      }

      return this.descriptionRegex.test(value);
    }

    createNewPost(formValues) {
      this.canLeave = true;
      // process categories into an array of strings
      const categoriesArray: string[] = formValues.categories.split(',').map(category => category.trim());
      // process date
      const dateYearMonthDayArray = formValues.info.date.split('-').map(unit => unit.trim());
      console.log(dateYearMonthDayArray);
      formValues.info.date = new Date(+dateYearMonthDayArray[2], +dateYearMonthDayArray[1] - 1, +dateYearMonthDayArray[0]);

      console.log(formValues);

      const newPost: IPost = {
        id: undefined,
        title: formValues.title,
        userName: undefined,
        userEmail: undefined,
        categories: categoriesArray,
        description: formValues.description,
        info: formValues.info
      };

      console.log(newPost);
      this.postServices.addPost(newPost);
      this.router.navigate(['/post']);
    }
}
