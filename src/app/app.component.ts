import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMS';
  results = '';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    //this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      this.http.get('http://msg.infoskysolutions.com/API/WebSMS/Http/v2.3.6/api.php?username=GREENLIFETD&api_key=3c8024152a5a4338216ffc73f455e24a&check_credit=1').subscribe(data => {
      //console.log("User Login: " + data.login);
      //console.log("Bio: " + data.bio);
      //console.log("Company: " + data.company);
    });
  }
}
