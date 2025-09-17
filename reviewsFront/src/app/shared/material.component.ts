import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatFormField} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@NgModule(
    {
        imports: [
            CommonModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatFormField,
            MatIcon
        ],

        exports: [
            CommonModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatFormField,
            MatIcon
        ]
    }
)
export class MaterialModule{}