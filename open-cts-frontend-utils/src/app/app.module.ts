import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputComponent } from './components/forms/text-input/text-input.component';
import { NumberInputComponent } from './components/forms/number-input/number-input.component';
import { EmailInputComponent } from './components/forms/email-input/email-input.component';
import { PasswordInputComponent } from './components/forms/password-input/password-input.component';
import { DateInputComponent } from './components/forms/date-input/date-input.component';
import { DatetimeInputComponent } from './components/forms/datetime-input/datetime-input.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { SelectComponent } from './components/forms/select/select.component';
import { FlashComponent } from './components/dialogs/flash/flash.component';
import { ConfirmComponent } from './components/dialogs/confirm/confirm.component';
import { CustomFormComponent } from './components/forms/custom-form/custom-form.component';
import { FileInputComponent } from './components/forms/file-input/file-input.component';
import { UploadCsvComponent } from './components/upload-csv/upload-csv.component';
import { DownloadPdfComponent } from './components/download-pdf/download-pdf.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MySafePipe } from './my-safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    NumberInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    DateInputComponent,
    DatetimeInputComponent,
    TextareaComponent,
    SelectComponent,
    FlashComponent,
    ConfirmComponent,
    CustomFormComponent,
    FileInputComponent,
    UploadCsvComponent,
    DownloadPdfComponent,
    RegisterComponent,
    MySafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
