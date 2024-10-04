/**
 * For this exercise you will be strengthening your page-fu mastery. 
 * You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array. 
 * The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. 
 * The types of values contained within the collection/array are not relevant.
 */
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	// returns the number of items within the entire collection
        //console.log(this.collection)
        return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
        return Math.ceil(this.itemCount()/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
        const chunk = this.chunkArray();
        console.log(this.chunkArray())
        
        if (pageIndex < 0 || pageIndex > this.pageCount()-1 || pageIndex === undefined){
            return -1;
        }else{
            return chunk[pageIndex].length;
        }

	}
    chunkArray() {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        const newArr = this.collection.reduce((acc, cv, index) => {
            if (index % this.itemsPerPage === 0) {
                acc.push(this.collection.slice(index, index + this.itemsPerPage));
            }
            return acc;
        },[]);
        return newArr
    }
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    const chunk = this.chunkArray();
    console.log(this.collection.length);
    
        if (this.collection.length === 0 || itemIndex > this.collection.length-1 || itemIndex < 0 || itemIndex === undefined){
            return -1
        }else {
            for ( let i =0; i < chunk.length; i++){
                for (let j =0; j < chunk[i].length; j++){
                    if (chunk[i][j] === this.collection[itemIndex]){
                        return i
                    }
                }
            }
        }
	}
}
const  helper = new PaginationHelper([2,2,2,2,2,2,2,2,2,2,2,2], 9);
// console.log(helper.pageCount()); // should == 2
// console.log(helper.itemCount(25)); // should == 6
 console.log(helper.pageIndex(8));
// console.log(helper.pageIndex(5));
// console.log(helper.pageIndex(20));
// console.log(helper.pageIndex(-10));
//console.log(helper.pageItemCount(-4)); // should == 4
//console.log(helper.pageItemCount(0)); // last page - should == 2


/** 
const  helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/