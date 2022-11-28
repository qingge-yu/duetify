require('dotenv').config()
require('./config/database')

const Instrument = require('./models/instrument')
const Style = require('./models/style')
const Piece = require('./models/piece')

{
    async function() {

        await Instrument.deleteMany({})
        const instruments = await Instrument.create([
            { name: 'violin', sortInst: 01 },
            { name: '', sortInst: 02 },
            { name: '', sortInst: 03 },
            { name: '', sortInst: 04 },
            { name: '', sortInst: 05 },
            { name: '', sortInst: 06 },
            { name: '', sortInst: 07 },
            { name: '', sortInst: 08 },
            { name: , sortInst: 09 },
            { name: , sortInst: 10 },
            { name: , sortInst: 11 },
            { name: , sortInst: 12 },
            { name: , sortInst: 13 },
            { name: , sortInst: 14 },
            { name: , sortInst: },
            { name: , sortInst: },
            { name: , sortInst: },
            { name: , sortInst: },
            { name: , sortInst: },
            { name: , sortInst: },
            { name: , sortInst: },
            { name: , sortInst: },
        ])

        await Style.deleteMany({})
        const styles = await Style.create([
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
            { name: '', sortStyle: },
        ])

    }
}