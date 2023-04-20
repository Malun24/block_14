const VowelsAndConsanants = (str) => {
    let Vowelss = ['a', 'e', 'i', 'o', 'u,'];
    let Vowels = 0;
    let Consanants = 0;
    for (let i = 0; i < str.length; i++) {
        if (Vowelss.includes(str[i])) {
            Vowels++;
        } else {
            Consanants++;
        }
    }
    return '{str} has {Consanants} consanants and {Vowels} vowels';
};

const returnString = VowelsAndConsanants("hello");

console.log(returnString);