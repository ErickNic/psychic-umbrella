function checkCashRegister(price, cash, cid) {
    let diff=cash - price;
    const cidCopy = [...cid]
    const submit = {
        status:"OPEN",
        change:[]
    }
    const currencyAvalabilityArray = [
        ['PENNY',false,0.01,false],
        ['NICKEL',false,0.05,false],
        ['DIME',false,0.1,false],
        ['QUARTER',false,0.25,false],
        ['ONE',false,1,false],
        ['FIVE',false,5,false],
        ['TEN',false,10,false],
        ['TWENTY',false,20,false],
        ['ONE HUNDRED',false,100,false],
        ['open',false]
    ];
    const closeSquema = [
        ['NICKEL',0],
        ['DIME',0],
        ['QUARTER',0],
        ['ONE',0],
        ['FIVE',0],
        ['TEN',0],
        ['TWENTY',0],
        ['ONE HUNDRED',0],
    ]
    let flag = 0;
    while(flag<9){
        if(cidCopy[flag][1]>0){
            currencyAvalabilityArray[flag][1] = true;
        }
        flag++;
    }
    let redFlag = 1;
    while(diff>0){
        if(diff>=100 && currencyAvalabilityArray[8][1]){
            if(!currencyAvalabilityArray[8][3]){
                submit.change.push([currencyAvalabilityArray[8][0],0]);
                currencyAvalabilityArray[8][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[8][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[8][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[8][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[8][1]===currencyAvalabilityArray[8][2]){
                currencyAvalabilityArray[8][1] = false;
            }
            cidCopy[8][1]= cidCopy[8][1] - currencyAvalabilityArray[8][2];
            cidCopy[8][1] =  Math.round((cidCopy[8][1] + Number.EPSILON) * 100) / 100;
            diff = diff - currencyAvalabilityArray[8][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;
            copy[1] =copy[1] +currencyAvalabilityArray[8][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;      
        }else if(diff>=20 && currencyAvalabilityArray[7][1]){
            if(!currencyAvalabilityArray[7][3]){
                submit.change.push([currencyAvalabilityArray[7][0],0]);
                currencyAvalabilityArray[7][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[7][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[7][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[7][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[7][1]===currencyAvalabilityArray[7][2]){
                currencyAvalabilityArray[7][1] = false;
            }

            cidCopy[7][1]= cidCopy[7][1] - currencyAvalabilityArray[7][2];
            cidCopy[7][1] =  Math.round((cidCopy[7][1] + Number.EPSILON) * 100) / 100;

            diff = diff - currencyAvalabilityArray[7][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;

            copy[1] =copy[1] +currencyAvalabilityArray[7][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;

        }else if(diff>=10 && currencyAvalabilityArray[6][1]){
            if(!currencyAvalabilityArray[6][3]){
                submit.change.push([currencyAvalabilityArray[6][0],0]);
                currencyAvalabilityArray[6][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[6][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[6][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[6][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[6][1]===currencyAvalabilityArray[6][2]){
                currencyAvalabilityArray[6][1] = false;
            }

            cidCopy[6][1]= cidCopy[6][1] - currencyAvalabilityArray[6][2];
            cidCopy[6][1] =  Math.round((cidCopy[6][1] + Number.EPSILON) * 100) / 100;

            diff = diff - currencyAvalabilityArray[6][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;

            copy[1] =copy[1] +currencyAvalabilityArray[6][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;
        }else if(diff>=5 && currencyAvalabilityArray[5][1]){
            if(!currencyAvalabilityArray[5][3]){
                submit.change.push([currencyAvalabilityArray[5][0],0]);
                currencyAvalabilityArray[5][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[5][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[5][5]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[5][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[5][1]===currencyAvalabilityArray[5][2]){
                currencyAvalabilityArray[5][1] = false;
            }

            cidCopy[5][1]= cidCopy[5][1] - currencyAvalabilityArray[5][2];
            cidCopy[5][1] =  Math.round((cidCopy[5][1] + Number.EPSILON) * 100) / 100;

            diff = diff - currencyAvalabilityArray[5][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;

            copy[1] =copy[1] +currencyAvalabilityArray[5][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;
        }else if(diff>=1 && currencyAvalabilityArray[4][1]){
            if(!currencyAvalabilityArray[4][3]){
                submit.change.push([currencyAvalabilityArray[4][0],0]);
                currencyAvalabilityArray[4][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[4][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[4][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[4][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[4][1]===currencyAvalabilityArray[4][2]){
                currencyAvalabilityArray[4][1] = false;
            }

            cidCopy[4][1]= cidCopy[4][1] - currencyAvalabilityArray[4][2];
            cidCopy[4][1] =  Math.round((cidCopy[4][1] + Number.EPSILON) * 100) / 100;

            diff = diff - currencyAvalabilityArray[4][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;

            copy[1] =copy[1] +currencyAvalabilityArray[4][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;

        }else if(diff>=0.25 && currencyAvalabilityArray[3][1]){
            if(!currencyAvalabilityArray[3][3]){
                submit.change.push([currencyAvalabilityArray[3][0],0]);
                currencyAvalabilityArray[3][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[3][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[3][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[3][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[3][1]===currencyAvalabilityArray[3][2]){
                currencyAvalabilityArray[3][1] = false;
            }

            cidCopy[3][1]= cidCopy[3][1] - currencyAvalabilityArray[3][2];
            cidCopy[3][1] =  Math.round((cidCopy[3][1] + Number.EPSILON) * 100) / 100;

            diff = diff - currencyAvalabilityArray[3][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;
            copy[1] =copy[1] +currencyAvalabilityArray[3][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;
        }else if(diff>=0.1 && currencyAvalabilityArray[2][1]){
            console.log('INICIO DEL DIME IF')
            console.log(diff)
            if(!currencyAvalabilityArray[2][3]){
                submit.change.push([currencyAvalabilityArray[2][0],0]);
                currencyAvalabilityArray[2][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[2][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[2][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[2][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[2][1]===currencyAvalabilityArray[2][2]){
                currencyAvalabilityArray[2][1] = false;
            }
            cidCopy[2][1] = cidCopy[2][1] - currencyAvalabilityArray[2][2];
            cidCopy[2][1] =  Math.round((cidCopy[2][1] + Number.EPSILON) * 100) / 100;

            diff = diff - currencyAvalabilityArray[2][2];
            diff =  Math.round((diff + Number.EPSILON) * 100) / 100;

            copy[1] =copy[1] +currencyAvalabilityArray[2][2]
            copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;

            console.log('El valor final del diff después de restar lo que se le da es: '+ diff)
            console.log('FINAL DEL DIME IF')
        }else if(diff>=0.05 && currencyAvalabilityArray[1][1]){
            if(!currencyAvalabilityArray[1][3]){
                submit.change.push([currencyAvalabilityArray[1][0],0]);
                currencyAvalabilityArray[1][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[1][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[1][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[1][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[1][1]===currencyAvalabilityArray[1][2]){
                currencyAvalabilityArray[1][1] = false;
            }
                cidCopy[1][1] = cidCopy[1][1] - currencyAvalabilityArray[1][2];
                cidCopy[1][1] =  Math.round((cidCopy[1][1] + Number.EPSILON) * 100) / 100;

                diff = diff - currencyAvalabilityArray[1][2];
                diff =  Math.round((diff + Number.EPSILON) * 100) / 100;

                copy[1] =copy[1] +currencyAvalabilityArray[1][2]
                copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;

        }else if(diff>=0.01 && currencyAvalabilityArray[0][1]){
            if(!currencyAvalabilityArray[0][3]){
                submit.change.push([currencyAvalabilityArray[0][0],0]);
                currencyAvalabilityArray[0][3]= true;
            }
            let copy = []
            let skipSign = false;
            submit.change.forEach(array =>{
                if(skipSign){
                    return
                }
                if(array[0] === currencyAvalabilityArray[0][0]){
                    copy = array;
                    skipSign = true;
                    return;
                }
            });
            if(cidCopy[0][1]>diff){
                submit.status = 'OPEN';
            }else if(cidCopy[0][1]===diff){
                submit.status = 'CLOSED';
            }
            if(cidCopy[0][1]===currencyAvalabilityArray[0][2]){
                currencyAvalabilityArray[0][1] = false;
            }
                cidCopy[0][1] = cidCopy[0][1] - currencyAvalabilityArray[0][2];
                cidCopy[0][1] =  Math.round((cidCopy[0][1] + Number.EPSILON) * 100) / 100;
                diff = diff - currencyAvalabilityArray[0][2];
                diff =  Math.round((diff + Number.EPSILON) * 100) / 100;
                copy[1] =copy[1] +currencyAvalabilityArray[0][2]
                copy[1] =Math.round((copy[1] + Number.EPSILON) * 100) / 100;
        }
    }

    if(diff>0){
        submit.status = 'INSUFFICIENT_FUNDS'
        submit.change = [];
    }
    if(submit.status === 'CLOSED'){
        submit.change.push(...closeSquema);
    }
    /* submit.change = submit.change.sort() */
    console.log(submit)
    return submit;
}
    
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
/* {status: "OPEN", change: 
        [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
} */