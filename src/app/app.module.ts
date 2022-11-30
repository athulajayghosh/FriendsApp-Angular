import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute: Routes=[
  {path:"",
  component:AddFriendComponent
  },
  {path:"search",
  component:SearchFriendComponent
  },
  {path:"view",
  component:ViewFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    SearchFriendComponent,
    ViewFriendComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
