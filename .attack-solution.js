// Can you break the password form?

// Part 1: break the password form so that it thinks all passwords are correct
isCorrect = () => true;

// Part 2: figure out which password is the right one!
console.log(owaspPasswords.filter(k => hashCode(k) === -20953309));

// Here's an alternative approach to Part 2 that is much slower.
// I use `ind` instead of `i` because there seems to be another
// `i` in use.
for (var ind = 0; ind < owaspPasswords.length; ind++) {
    if (hashCode(owaspPasswords[ind]) === -20953309) {
        console.log(owaspPasswords[ind]);
    }
}