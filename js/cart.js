/*
   merging 2 arrays without making any duplicate array items

   variables
   currentList
   currentNeed
   resultList

   create function mergeList
    variables
    list1
    list2
    resultList
    mergelist(list1,list2){
        resultList=list1 and list2 merged
        resultList=resultList with no repeating items in array
        console.log(resultList);
    }
*/

var currentList=[
    "can food",
    "milk",
    "eggs",
    "cereal",
    "fruit",
    "shampoo",
    "veggies"]

var currentNeed=[
    "tea",
    "shrimp",
    "chicken",
    "can food",
    "milk",
    "eggs",
    "cereal",
    "fruit",
    "toothpaste",
    "veggies",
    "potatoes",
    "hot pockets"]

function mergeList(list1,list2){
let resultList=list1.concat(list2);

resultList=[...new Set([...list1,...list2])];

return console.log(resultList);
};


mergeList(currentList,currentNeed);

/*
building a function that removes any array items in list1 that are also in list2

create function removeDups
variables
list1
list2
i
j

for (i=0; i<list1.length;i++){
for(j=0;j<list2.length;j++){
    if list1[i]==list2[j]{
        remove array item[i]
    }
    else{
        return;
    }
}
}
*/
var doesntMatter=[];

function removeDups(list1,list2,list3){
    for (let i=0;i<list1.length;i++){
        list3[i]=list1[i];
        for (let j=0;j<list2.length;j++){
            if(list3[i]==list2[j]){
            list3.splice(i,1);
            }
        }
    }
    console.log(list3);
    return;
};

removeDups(currentList,currentNeed,doesntMatter);
console.log(currentList);
