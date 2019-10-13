import {
    MatTooltipModule,
    MatSortModule,
    MatRadioModule, MatPaginatorModule, MatAutocompleteModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatDividerModule, MatIconModule, 
    MatCheckboxModule,
    MatButtonToggleModule, MatDialogModule, MatChipsModule, MatTableModule, MatStepperModule, MatDatepicker, matDatepickerAnimations, MatDatepickerModule,
     MatNativeDateModule, MatSlideToggleModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatMenuModule, MatInputModule, MatSidenav, MatSidenavModule
} from '@angular/material'
import { NgModule } from '@angular/core';



@NgModule({
    imports: [MatTooltipModule,
        MatSortModule,
        MatInputModule, MatSidenavModule, MatOptionModule, MatMenuModule, MatRadioModule, MatPaginatorModule,
         MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, MatNativeDateModule, MatDatepickerModule, MatTableModule, 
         MatChipsModule, MatDialogModule, MatButtonToggleModule, MatCheckboxModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatDividerModule],
    exports: [MatTooltipModule, MatSortModule,
        MatInputModule, MatSidenavModule, MatOptionModule, MatMenuModule, MatRadioModule, MatPaginatorModule, MatAutocompleteModule, MatFormFieldModule, 
        MatSelectModule, MatOptionModule, MatSlideToggleModule, MatNativeDateModule, MatDatepickerModule, MatDatepicker, MatStepperModule, MatTableModule, MatChipsModule,
         MatDialogModule, MatButtonToggleModule, MatCheckboxModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatDividerModule]
})
export class MaterialModule { }
