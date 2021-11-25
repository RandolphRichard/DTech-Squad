const { User } = require('../models');

const userData = [
    {
        username: "Samuel_Fox",
        twitter: "SamuelF",
        github: "SamuelF",
        email: "SamuelF@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Randolph_Richard",
        twitter: "RandolphRichard",
        github: "RandolphRichard",
        email: "RandolphRichard@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Romanov_Richard",
        twitter: "RomanovRichard",
        github: "RomanovRichard",
        email: "RomanovRichard@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Bob_Marley",
        twitter: "BobMarley",
        github: "BobMarley",
        email: "BobMarley@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Kevin_Muita",
        twitter: "KevinMuita",
        github: "KevinMuita",
        email: "KevinMuita@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Gabi_Beaudin",
        twitter: "GabiBeaudin",
        github: "Gabi_Beaudin",
        email: "GabiBeaudin@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;