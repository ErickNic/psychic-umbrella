function checkCashRegister(price, cash, cid) {
    let diff=cash - price;
    const submit = {
        status:'CLOSED',
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
    console.log(diff)
    while(diff>0){
        if(diff>=100 && currencyAvalabilityArray[8][1]){
            if(change[8][1]>diff){
                submit.status = 'OPEN';
            }else if(change[8][1]===diff){
                submit.status = 'CLOSED';
                currencyAvalabilityArray[8][1]=false;
            }
            submit.change[8][1] = submit.change[8][1] - 100;
            diff = diff - 100;
        }else if(diff>=20 && currencyAvalabilityArray[7][1]){
            if(change[7][1]>diff){
                submit.status = 'OPEN';
                }else if(change[7][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[7][1]=false;
                }
                submit.change[7][1] = submit.change[7][1] - 20;
                diff = diff - 20;
        }else if(diff>=10 && currencyAvalabilityArray[6][1]){
            if(change[6][1]>diff){
                submit.status = 'OPEN';
                }else if(change[6][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[6][1]=false;
                }
                submit.change[6][1] = submit.change[6][1] - 10;
                diff = diff - 10;
        }else if(diff>=5 && currencyAvalabilityArray[5][1]){
            if(submit.change[5][1]>diff){
                submit.status = 'OPEN';
                }else if(submit.change[5][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[5][1]=false;
                }
                diff = diff - 5;
                submit.change[5][1] = submit.change[5][1] - 5;
        }else if(diff>=1 && currencyAvalabilityArray[4][1]){
        if(submit.change[4][1]>diff){
            submit.status = 'OPEN';
            }else if(submit.change[4][1]===diff){    
                submit.status = 'CLOSED';
                currencyAvalabilityArray[4][1]=false;
            }
            diff = diff - 1;
            submit.change[4][1] = submit.change[4][1] - 1;
        }else if(diff>=0.25 && currencyAvalabilityArray[3][1]){
            if(submit.change[3][1]>diff){
                submit.status = 'OPEN';
                }else if(submit.change[3][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[3][1]=false;
                }
                submit.change[3][1] = submit.change[3][1] - 0.25;
                diff = diff - 0.25;
        }else if(diff>=0.1 && currencyAvalabilityArray[2][1]){
            if(submit.change[2][1]>diff){
                submit.status = 'OPEN';
                }else if(submit.change[2][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[2][1]=false;
                }
                submit.change[2][1] = submit.change[2][1] - 0.1;
                diff = diff - 0.1
        }else if(diff>=0.05 && currencyAvalabilityArray[1][1]){
            if(submit.change[1][1]>diff){
                submit.status = 'OPEN';
                }else if(submit.change[1][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[1][1]=false;
                }
                submit.change[1][1] = submit.change[1][1] - 0.05;
                diff = diff - 0.05;
        }else if(diff>=0.01 && currencyAvalabilityArray[0][1]){
            if(submit.change[0][1]>diff){
                submit.status = 'OPEN';
                }else if(submit.change[0][1]===diff){
                    submit.status = 'CLOSED';
                    currencyAvalabilityArray[0][1]=false;
                }
                submit.change[0][1] = submit.change[0][1] - 0.01;
                diff = diff - 0.01; 
        }
        console.log(diff)
    }
    if(diff>0){
        submit.status = 'INSUFFICIENT_FUNDS'
    }
    console.log(submit)
    return 'submit';
}
    
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
