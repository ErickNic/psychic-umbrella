function checkCashRegister(price, cash, cid) {
    let diff=cash - price;
    const submit = {
        status:'close',
        change:[...cid]
    }
    const currencyAvalabilityArray = [
        ['oneDollar',0],
        ['quarter',0],
        ['dime',0],
        ['nickel',0],
        ['penny',0],
        ['fiveDollar',0],
        ['tenDollars',0],
        ['twentyDollars',0],
        ['oneHundredDollars',0],
    ];
    let flag = 0;
    while(flag<9){
        if(submit.change[flag][1]>0){
            currencyAvalabilityArray[flag][1] = 1;
        }
        flag++;
    }
    console.log(currencyAvalabilityArray)
    console.log(diff);
/*     while(diff>0){
        if(diff>=100 && currencyAvalabilityArray[8][1]){
            if(change[8][1]>diff){
                submit.change[8][1] = submit.change[8][1] - 100;
                submit.status = 'open';
            }else if(change[8][1]===diff){
                submit.change[8][1] = submit.change[8][1] - 100;
                submit.status = 'close';
                currencyAvalabilityArray[8][1]=false;
            }
            }else if(diff>=20 && currencyAvalabilityArray[7][1]){
            if(change[7][1]>diff){
                submit.change[7][1] = submit.change[7][1] - 20;
                submit.status = 'open';
                }else if(change[7][1]===diff){
                    submit.change[7][1] = submit.change[7][1] - 20;
                    submit.status = 'close';
                    currencyAvalabilityArray[7][1]=false;
                }
            }else if(diff>=10 && currencyAvalabilityArray[6][1]){
            if(change[6][1]>diff){
                submit.change[6][1] = submit.change[6][1] - 10;
                submit.status = 'open';
                }else if(change[6][1]===diff){
                submit.change[6][1] = submit.change[6][1] - 10;
                    submit.status = 'close';
                    currencyAvalabilityArray[6][1]=false;
                }
            }else if(diff>=5 && currencyAvalabilityArray[5][1]){
            if(submit.change[5][1]>diff){
                submit.change[5][1] = submit.change[5][1] - 5;
                submit.status = 'open';
                }else if(submit.change[5][1]===diff){
                submit.change[5][1] = submit.change[5][1] - 5;
                    submit.status = 'close';
                    currencyAvalabilityArray[5][1]=false;
                }
            }else if(diff>=1 && currencyAvalabilityArray[4][1]){
            if(submit.change[4][1]>diff){
                submit.change[4][1] = submit.change[4][1] - 1;
                submit.status = 'open';
                }else if(submit.change[4][1]===diff){
                submit.change[4][1] = submit.change[4][1] - 1;
                    submit.status = 'close';
                    currencyAvalabilityArray[4][1]=false;
                }
            }else if(diff>=0.25 && currencyAvalabilityArray[3][1]){
                if(submit.change[3][1]>diff){
                    submit.change[3][1] = submit.change[3][1] - 0.25;
                    submit.status = 'open';
                    }else if(submit.change[3][1]===diff){
                    submit.change[3][1] = submit.change[3][1] - 0.25;
                        submit.status = 'close';
                        currencyAvalabilityArray[3][1]=false;
                    }
            }else if(diff>=0.1 && currencyAvalabilityArray[2][1]){
                if(submit.change[2][1]>diff){
                    submit.change[2][1] = submit.change[2][1] - 0.1;
                    submit.status = 'open';
                    }else if(submit.change[2][1]===diff){
                    submit.change[2][1] = submit.change[2][1] - 0.1;
                        submit.status = 'close';
                        currencyAvalabilityArray[2][1]=false;
                    }
            }else if(diff>=0.05 && currencyAvalabilityArray[1][1]){
                if(submit.change[1][1]>diff){
                    submit.change[1][1] = submit.change[1][1] - 0.05;
                    submit.status = 'open';
                    }else if(submit.change[1][1]===diff){
                        submit.change[1][1] = submit.change[1][1] - 0.05;
                        submit.status = 'close';
                        currencyAvalabilityArray[1][1]=false;
                    }
            }else if(diff>=0.01 && currencyAvalabilityArray[0][1]){
                if(submit.change[0][1]>diff){
                    submit.change[0][1] = submit.change[0][1] - 0.01;
                    submit.status = 'open';
                    }else if(submit.change[0][1]===diff){
                        submit.change[0][1] = submit.change[0][1] - 0.01;
                        submit.status = 'close';
                        currencyAvalabilityArray[0][1]=false;
                    }
            }
    } */
    return 'submit';
    }
    
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);