import { BasePickerItem } from "../Components/elements/BasePicker";
import { Amenity } from "../types/property";

export function formatAmount(amount: string): string {
    
    let fortmattedString: string = `${amount}`;
    let trailingDecimal: string = '';

    // Remove trailing .00
    if (amount.includes('.')) {
        let pointIndex = amount.indexOf('.');
        trailingDecimal = amount.slice(-3);
        fortmattedString = amount.slice(0,pointIndex);
    }
    let count = 0;

    /** Start from the end and add a comma after three */
    for (let i = fortmattedString.length - 1; i > 0; i--) {
        count ++;
        if (count === 3) {
            count = 0;
            fortmattedString = fortmattedString.slice(0, i) + "," + fortmattedString.slice(i);
        }
    }

    return fortmattedString + trailingDecimal;
}

export function formatDate(date: Date) {
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November',
        'December'
    ]
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
}

export function getInitials(fullname: string): string{
    let nameArr: string[] = fullname.split(" ")
    let firstLetters: string[] = [];
 
    for (let i = 0; i < nameArr.length; i++){
        firstLetters.push(nameArr[i].charAt(0));
    }
    
    let firstInitial = firstLetters[0]
    let lastInitial = firstLetters.slice(-1)[0]
    return firstInitial + lastInitial
};

export function toPickerItem(arr: any[]): BasePickerItem[] {
    let result: BasePickerItem[] = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result.push({ label: element, value: element }); 
    }

    return result;
}

export function getAmenityIcon(amenity: Amenity) {
    let iconHash = {
        [Amenity.AirConditioning]: 'hvac',
        [Amenity.Backyard]: 'grass',
        [Amenity.Electricity]: 'lightning-bolt',
        [Amenity.EquippedKitchen]: 'fridge',
        [Amenity.Gym]: 'dumbbell',
        [Amenity.Laundry]: 'washing-machine',
        [Amenity.MediaRoom]: 'movie',
        [Amenity.Pool]: 'pool',
        [Amenity.WIFI]: 'wifi',
        [Amenity.WashingMachine]: 'washing-machine',
        [Amenity.WaterSupply]: 'water'
    }
    return iconHash[amenity];
}