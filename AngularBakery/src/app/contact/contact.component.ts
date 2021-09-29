import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../services/contact.service';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

FormData: FormGroup;
messageSent:boolean;

  constructor(private fb :FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.fb.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
      
    })
    var HQ = { lat: 9.0548, lng: 7.4856 }
    const map = tt.map({
      key: 'PXYpZHLn278O3zENc6Z07GfryIR32Wdc',
      container: 'map',
      center:HQ,
      zoom:15
    });
   
    var marker = new tt.Marker().setLngLat(HQ).addTo(map);



var popup = new tt.Popup({anchor:'top'}).setHTML("<b>TamSweets</b><br/>100 Century Center Ct 210, San Jose, CA 95112, USA");
marker.setPopup(popup).togglePopup()

    map.addControl(new tt.NavigationControl());
  }
  
  
onSubmit(FormData){
this.contact.PostMessage(FormData).subscribe((_)=>{
  this.messageSent=true;
}, (err)=>{
  this.messageSent=false;
});
}

}
