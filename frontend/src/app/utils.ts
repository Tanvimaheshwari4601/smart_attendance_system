export const YEARS = [
    { value : 1, label : 'I' },
    { value : 2, label : 'II' },
    { value : 3, label : 'III' },
    { value : 4, label : 'IV' }

]

export const DEPARTMENTS = [
    { value : 1, label : 'Computer Science and Engineering'},
    { value : 2, label : 'Civil Engineering'},
    { value : 3, label : 'Electronic Engineering'},
    { value : 4, label : 'Electric Engineering'},
    { value : 5, label : 'Mechanical Engineering'}
    
]

export const SEMS = [
    { value : 1, label : '1st' },
    { value : 2, label : '2nd' },
    { value : 3, label : '3rd' },
    { value : 4, label : '4th' },
    { value : 5, label : '5th' },
    { value : 6, label : '6th' },
    { value : 7, label : '7th' },
    { value : 8, label : '8th' }
]

export const SUBJECTS = [
    { value : 1, label : 'Software Engineering' },
    { value : 2, label : 'Theory of Computation' },
    { value : 3, label : 'Digital Electronics' }

]

export const ATT_STATUS = [
    {value : 1 , label  :'Absent'},
    {value : 2, label : 'Present'}
]

export const getLabelBasedOnValue = (arr, val) => {
    const element = arr.find(item => item.value == val) || {label : 'Not Found'};
    return element.label;
}
