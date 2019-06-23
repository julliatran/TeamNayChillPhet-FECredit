import { Component, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { CreditService } from '../../service/product/credit.service';

@Component({
  selector: 'calculate-root',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  totalIncome;
  familyMember;
  selectedProduct;

  productType;
  totalIncomeDisplay;
  totalIncomAsRange;
  productList = [];
  totalMonth;
  monthlyPayment;

  category;
  smartphoneListFromDatabase = this.productService.getSmartphoneList();
  motorbikeListFromDatabase = this.productService.getMotorbikeList();
  productTypes = this.productService.getProductCategory();

  constructor(private changeDetector: ChangeDetectorRef, private productService: ProductService, private creditService: CreditService) {
    this.clearTotalIncomField();
  }

  private clearTotalIncomField() {
    this.totalIncomAsRange = 0;
    this.totalIncomeDisplay = '0VND';
  }
  
  totalIncomChange(event) {
    if (event.target.value > 0) {
      this.totalIncomeDisplay = event.target.value + '.000.000' + 'VND';
      this.totalIncomAsRange = event.target.value;
      this.totalIncome = event.target.value * 1000000;
    } else {
      this.totalIncomeDisplay = event.target.value + 'VND';
      this.totalIncome = 0;
    }
    this.updateViewByUserAction();
  }
  onChangeFamilyMember(event) {
    this.updateViewByUserAction();
  }
  onChangeProductType(event) {
    if ('Smartphone' == event.target.value) {
      this.category = 'Smartphone';
    } else {
      this.category = 'Motorbike';
    }
    this.updateViewByUserAction();
  }

  private updateViewByUserAction() {
    this.updateListProduct();
    this.clearCreditResultOnWeb();
    this.clearSelectedCSS();
  }

  private clearCreditResultOnWeb() {
    this.totalMonth = 0;
    this.monthlyPayment = 0;
  }

  updateListProduct() {
    if (this.totalIncome && this.familyMember) {
      this.productList = [];
      var productFromDB;
      if(this.category == 'Smartphone') {
        productFromDB = this.smartphoneListFromDatabase;
      } else if(this.category == 'Motorbike') {
        productFromDB = this.motorbikeListFromDatabase;
      }
      productFromDB.forEach(productDB => {
        var creditInfo = this.creditService.getCreditInfo(this.totalIncome, this.familyMember, productDB.Price);
        console.log(creditInfo);
        if (creditInfo) {
          this.productList.push(productDB);
        }
      });
    }

  }

  selectProduct(product) {
    this.selectedProduct = product;
    //clear the slected
    this.clearSelectedCSS();
    var selectedProductAsDocument = (document.querySelector('.' + product.Id) as HTMLElement);
    selectedProductAsDocument.style.borderStyle = 'solid';
    selectedProductAsDocument.style.borderWidth = '5px';
    var creditInfo = this.creditService.getCreditInfo(this.totalIncome, this.familyMember, product.Price);
    if(creditInfo) {
      this.totalMonth = creditInfo.numberOfMonth;
      this.monthlyPayment = this.creditService.getCostPerMonth(product.Price, this.totalMonth);
    }

  }

  private clearSelectedCSS() {
    this.productList.forEach(productInList => {
      var selectedProductAsDocument = (document.querySelector('.' + productInList.Id) as HTMLElement);
      selectedProductAsDocument.style.borderStyle = '';
      selectedProductAsDocument.style.borderWidth = '';
    });
  }
}