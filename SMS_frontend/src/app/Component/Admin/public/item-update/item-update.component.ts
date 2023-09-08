import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from '../../services/item/item.service';
import { ItemDetailsFormComponent } from '../item-details-form/item-details-form.component';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.sass']
})
export class ItemUpdateComponent {
  @Input() item!: Item;

  constructor(
    private matDialog: MatDialog,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(): void {
    const dialogRef = this.openDialog();
    dialogRef.afterClosed().subscribe((result: Item) => {
      if (result) {
        this.updateItem(result);
      }
    });
  }

  private openDialog(): MatDialogRef<any> {
    const item: Item = Object.assign({}, this.item);
    return this.matDialog.open(ItemDetailsFormComponent, {
      data: {
        item,
        itemActionTitle: 'Update Item',
        submitButtonLabel: 'Update',
        readonlyFields: {
          code: true,
          name: false,
          cost: false,
          price: false,
          quantity: false
        }
      }
    });
  }

  private updateItem(result: Item): void {
    // Todo Use HATEOAS Urls
    const url = 'http://localhost:5000/admin/api/items/' + this.item.id;
    const item: Item = {
      id: undefined,
      code: result.code,
      name: result.name,
      cost: result.cost,
      price: result.price,
      quantity: result.quantity,
      description: result.description,
      imgurl:result.imgurl
    };
    this.itemService.updateItem(url, item)
      .subscribe();
  }
}
