import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../interfaces/item';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-details-form',
  templateUrl: './item-details-form.component.html',
  styleUrls: ['./item-details-form.component.sass']
})
export class ItemDetailsFormComponent {
  readonlyFields: {
    code?: boolean;
    name?: boolean,
    cost?: boolean,
    price?: boolean,
    quantity?: boolean,
    description?: boolean,
    imgurl?: boolean

  } = {};

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {
      item: Item,
      itemActionTitle: string,
      submitButtonLabel: string,
      readonlyFields: {
        code?: boolean;
        name?: boolean,
        cost?: boolean,
        price?: boolean,
        quantity?: boolean,
        description?: boolean,
        imgurl?: boolean
      }
    }
  ) { }

  textInputValidators = [Validators.required, Validators.maxLength(100)];
  currencyInputValidators = [Validators.required, Validators.pattern(/^\d+(.\d{2})?$/)];
  numberInputValidators = [Validators.required, Validators.pattern(/^\d+$/)];

  itemForm = this.formBuilder.group({
    code: [this.data.item.code, this.textInputValidators],
    name: [this.data.item.name, this.textInputValidators],
    description: [this.data.item.description, this.textInputValidators],
    imgurl: [this.data.item.imgurl, this.textInputValidators],
    cost: [this.data.item.cost, this.currencyInputValidators],
    price: [this.data.item.price, this.currencyInputValidators],
    quantity: [this.data.item.quantity, this.numberInputValidators]
  });

  ngOnInit(): void {
  }
}
