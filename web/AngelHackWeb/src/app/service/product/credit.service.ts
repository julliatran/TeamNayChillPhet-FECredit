import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class CreditService {
    private percentage = 1.0375;
    private percentageDown = 0.0010;
    constructor(private http: Http) {
    }

    getCostPerMonth(cost, months) {
        var currentPercentage = this.percentage;
        for(var i = 0; i < months; i++) {
            currentPercentage = currentPercentage - this.percentageDown;
            cost = cost*currentPercentage;
        }
        this.percentage = 1.0375;
        return cost/months;
    }

    getCreditInfo(income, familyNum, cost) {
        var creditInfo = {
            totalMoneyNetted: [],
            totalCostOfProductPerMonth: [],
            numberOfMonth: 0,
            totalCostOfProduct: 0
        }
        if(familyNum > 0 && income >= 1000000) {
            var monthlyIncome = income;
            var averageCost = 0;
            if(familyNum == 1) {
                averageCost = 5000000;
            } else if(familyNum == 2) {
                averageCost = 7000000;
            } else {
                var numChildren = familyNum - 2;
                averageCost = 7000000 + numChildren*1000000;
            }
            var netExtra = monthlyIncome - averageCost;
            var total = 0;
            var months = 0;
            for(var i = 0; i < 25; i++) {
                creditInfo.totalMoneyNetted.push(total);
                creditInfo.totalCostOfProductPerMonth.push(cost);
                total = total += netExtra;
                this.percentage = this.percentage - 0.0010;
                cost = cost*this.percentage;
                months++;
                if(total >= cost) {
                    creditInfo.numberOfMonth = months;
                    break;
                }
            }
            this.percentage = 1.0375;
            if(months > 24 || months <= 0) {
                return;
            } else {
                return creditInfo;
            }
        }
    }



}