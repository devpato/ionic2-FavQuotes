import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';

import { Component } from '@angular/core';

@Component({
    selector: 'page-tabs',
    template: `<ion-tabs>
                 <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
                 <ion-tab [root]="libraryPage" tabTitle="Favorites" tabIcon="book"></ion-tab>
              </ion-tabs>
              `

})

export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}