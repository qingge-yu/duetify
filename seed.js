require('dotenv').config();
require('./config/database');

const Instrument = require('./models/instrument')
const Style = require('./models/style')
const Piece = require('./models/piece');

(async function () {

    await Instrument.deleteMany({})
    const instruments = await Instrument.create([
        { name: 'Violin', index: 0 },
        { name: 'Cello', index: 1 },
        { name: 'Piano', index: 2 },
        { name: 'Clarinet', index: 3 },
        { name: 'Double Bass', index: 4 },
        { name: 'Flute', index: 5 },
        { name: 'Oboe', index: 6 },
        { name: 'Bassoon', index: 7 },
        { name: 'Trombone', index: 8 },
        { name: 'Flugelhorn', index: 9 },
        { name: 'Viola', index: 10 },
        { name: 'Harpsichord', index: 11 },
        { name: 'Keyboard', index: 12 },
        { name: 'Trumpet', index: 13 },
        { name: 'French Horn', index: 14 },
        { name: 'Saxophone', index: 15 },
        { name: 'Organ', index: 16 },
    ])

    await Style.deleteMany({})
    const styles = await Style.create([
        { name: 'Baroque', index: 0 },
        { name: 'Modern', index: 1 },
        { name: 'Classical', index: 2 },
        { name: 'Romantic', index: 3 },
        { name: 'Renaissance', index: 4 },
        { name: 'Early 20th Century', index: 5 },
        { name: 'Non-western Classical', index: 6 },
    ])

    await Piece.deleteMany({})
    const pieces = await Piece.create([
        { name: 'Allegro in C major (Handel, George Frideric)', instrument1: instruments[0].name, instrument2: instruments[0].name, style: styles[0].name, link: 'https://imslp.org/wiki/Allegro_in_C_major_(Handel%2C_George_Frideric)', index: 0 },
        { name: 'Astrid Duo for Violin and Cello (Sydeman, William Jay)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[1].name, link: 'https://imslp.org/wiki/Astrid_Duo_for_Violin_and_Cello_(Sydeman%2C_William_Jay)', index: 1 },
        { name: '6 Beginner Piano Duets (Allard, Michel)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[1].name, link: 'https://imslp.org/wiki/6_Beginner_Piano_Duets_(Allard%2C_Michel)', index: 2 },
        { name: 'Bumbling Ostinato (Besset, Julian Raoul)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[1].name, link: 'https://imslp.org/wiki/Bumbling_Ostinato_(Besset%2C_Julian_Raoul)', index: 3 },
        { name: 'Cello Duet (Ruelas Villela, Rodrigo)', instrument1: instruments[1].name, instrument2: instruments[1].name, style: styles[2].name, link: 'https://imslp.org/wiki/Cello_Duet_(Ruelas_Villela%2C_Rodrigo)', index: 4 },
        { name: 'Clarinet Duet 2 (Reintjes, Roy)', instrument1: instruments[3].name, instrument2: instruments[3].name, style: styles[1].name, link: 'https://imslp.org/wiki/Clarinet_Duet_2_(Reintjes%2C_Roy)', index: 5 },
        { name: 'Duet for 2 Pianos in B-flat minor, Op.3 (Locke, Nicholas)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duet_for_2_Pianos_in_B-flat_minor%2C_Op.3_(Locke%2C_Nicholas)', index: 6 },
        { name: 'Duet for Cello and Double Bass in D major (Rossini, Gioacchino)', instrument1: instruments[1].name, instrument2: instruments[4].name, style: styles[3].name, link: 'https://imslp.org/wiki/Duet_for_Cello_and_Double_Bass_in_D_major_(Rossini%2C_Gioacchino)', index: 7 },
        { name: 'Duet for Flute and Violin in G major (Hoffmeister, Franz Anton)', instrument1: instruments[0].name, instrument2: instruments[5].name, style: styles[2].name, link: 'https://imslp.org/wiki/Duet_for_Flute_and_Violin_in_G_major_(Hoffmeister%2C_Franz_Anton)', index: 8 },
        { name: 'Duet for Flute and Violin (Pacheco, John Manuel)', instrument1: instruments[0].name, instrument2: instruments[5].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duet_for_Flute_and_Violin_(Pacheco%2C_John_Manuel)', index: 9 },
        { name: 'Duet for Oboe and Bassoon (Verbalis, Anthony)', instrument1: instruments[6].name, instrument2: instruments[7].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duet_for_Oboe_and_Bassoon_(Verbalis%2C_Anthony)', index: 10 },
        { name: 'Duet For Violin and Cello (Moore, Robert)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duet_For_Violin_and_Cello_(Moore%2C_Robert)', index: 11 },
        { name: 'Dueto No.1 (Sousa, Welligton)', instrument1: instruments[2].name, instrument2: instruments[8].name, style: styles[1].name, link: 'https://imslp.org/wiki/Dueto_No.1_(Sousa%2C_Welligton)', index: 12 },
        { name: '6 Duets for 2 Flutes, QV 3:2 (Quantz, Johann Joachim)', instrument1: instruments[5].name, instrument2: instruments[5].name, style: styles[0].name, link: 'https://imslp.org/wiki/6_Duets_for_2_Flutes%2C_QV_3:2_(Quantz%2C_Johann_Joachim)', index: 13 },
        { name: '25 Duets for Flugelhorns (Lassus, Orlande de)', instrument1: instruments[9].name, instrument2: instruments[9].name, style: styles[4].name, link: 'https://imslp.org/wiki/25_Duets_for_Flugelhorns_(Lassus%2C_Orlande_de)', index: 14 },
        { name: 'Duetto for 2 Violas da Gamba in D minor, CSWV F:8 (Schaffrath, Christoph)', instrument1: instruments[10].name, instrument2: instruments[10].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_for_2_Violas_da_Gamba_in_D_minor%2C_CSWV_F:8_(Schaffrath%2C_Christoph)', index: 15 },
        { name: 'Duetto for Bassoon and Harpsichord in F minor, CSWV F:18 (Schaffrath, Christoph)', instrument1: instruments[7].name, instrument2: instruments[11].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_for_Bassoon_and_Harpsichord_in_F_minor%2C_CSWV_F:18_(Schaffrath%2C_Christoph)', index: 16 },
        { name: 'Duetto in G-sharp minor, CSWV F:25 (Schaffrath, Christoph)', instrument1: instruments[0].name, instrument2: instruments[11].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_in_G-sharp_minor%2C_CSWV_F:25_(Schaffrath%2C_Christoph)', index: 17 },
        { name: 'Duetto No.1 in E minor, BWV 802 (Bach, Johann Sebastian)', instrument1: instruments[12].name, instrument2: instruments[12].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_No.1_in_E_minor%2C_BWV_802_(Bach%2C_Johann_Sebastian)', index: 18 },
        { name: 'Duetto No.2 in F major, BWV 803 (Bach, Johann Sebastian)', instrument1: instruments[12].name, instrument2: instruments[12].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_No.2_in_F_major%2C_BWV_803_(Bach%2C_Johann_Sebastian)', index: 19 },
        { name: 'Duetto No.3 in G major, BWV 804 (Bach, Johann Sebastian)', instrument1: instruments[12].name, instrument2: instruments[12].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_No.3_in_G_major%2C_BWV_804_(Bach%2C_Johann_Sebastian)', index: 20 },
        { name: 'Duetto No.4 in A minor, BWV 805 (Bach, Johann Sebastian)', instrument1: instruments[12].name, instrument2: instruments[12].name, style: styles[0].name, link: 'https://imslp.org/wiki/Duetto_No.4_in_A_minor%2C_BWV_805_(Bach%2C_Johann_Sebastian)', index: 21 },
        { name: 'Duo Canon XVII, Libro 2 (Licino, Agostino)', instrument1: instruments[13].name, instrument2: instruments[13].name, style: styles[4].name, link: 'https://imslp.org/wiki/Duo_Canon_XVII%2C_Libro_2_(Licino%2C_Agostino)', index: 22 },
        { name: 'Duo for Cello and Double Bass (Crosmer, Jeremy)', instrument1: instruments[1].name, instrument2: instruments[4].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_for_Cello_and_Double_Bass_(Crosmer%2C_Jeremy)', index: 23 },
        { name: 'Duo for Flute and Viola (Fine, Vivian)', instrument1: instruments[5].name, instrument2: instruments[10].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_for_Flute_and_Viola_(Fine%2C_Vivian)', index: 24 },
        { name: 'Duo for Violin and Cello, 1 (Hermann, Pál)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[5].name, link: 'https://imslp.org/wiki/Duo_for_Violin_and_Cello%2C_1_(Hermann%2C_P%C3%A1l)', index: 25 },
        { name: 'Duo for Violin and Cello, 2 (Hermann, Pál)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[5].name, link: 'https://imslp.org/wiki/Duo_for_Violin_and_Cello%2C_2_(Hermann%2C_P%C3%A1l)', index: 26 },
        { name: 'Duo for Violin and Cello (Sydeman, William Jay)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_for_Violin_and_Cello_(Sydeman%2C_William_Jay)', index: 27 },
        { name: 'Duo for Violin and Piano (Rosaria, Danielle)', instrument1: instruments[0].name, instrument2: instruments[2].name, style: styles[5].name, link: 'https://imslp.org/wiki/Duo_for_Violin_and_Piano_(Rosaria%2C_Danielle)', index: 28 },
        { name: 'Duo for Violin and Tenor Saxophone (Bouma, Hugo)', instrument1: instruments[0].name, instrument2: instruments[15].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_for_Violin_and_Tenor_Saxophone_(Bouma%2C_Hugo)', index: 29 },
        { name: 'Duo for Violin and Viola, K.423 (Mozart, Wolfgang Amadeus)', instrument1: instruments[0].name, instrument2: instruments[10].name, style: styles[2].name, link: 'https://imslp.org/wiki/Duo_for_Violin_and_Viola%2C_K.423_(Mozart%2C_Wolfgang_Amadeus)', index: 30 },
        { name: 'Duo No.1 for Viola and Cello (Sydeman, William Jay)', instrument1: instruments[1].name, instrument2: instruments[10].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_No.1_for_Viola_and_Cello_(Sydeman%2C_William_Jay)', index: 31 },
        { name: 'Duo No.2 for Viola and Cello (Sydeman, William Jay)', instrument1: instruments[1].name, instrument2: instruments[10].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_No.2_for_Viola_and_Cello_(Sydeman%2C_William_Jay)', index: 32 },
        { name: 'Duo No.2 for Violin and Piano (Rosaria, Danielle)', instrument1: instruments[0].name, instrument2: instruments[2].name, style: styles[6].name, link: 'https://imslp.org/wiki/Duo_No.2_for_Violin_and_Piano_(Rosaria%2C_Danielle)', index: 33 },
        { name: 'Duo Sonata (Beischer-Matyó, Tamás)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[1].name, link: 'https://imslp.org/wiki/Duo_Sonata_(Beischer-Maty%C3%B3%2C_Tam%C3%A1s)', index: 34 },
        { name: '44 Duos for 2 Violins, Sz.98 (Bartók, Béla)', instrument1: instruments[0].name, instrument2: instruments[0].name, style: styles[5].name, link: 'https://imslp.org/wiki/44_Duos_for_2_Violins%2C_Sz.98_(Bart%C3%B3k%2C_B%C3%A9la)', index: 35 },
        { name: '6 Duos for Flute and Organ (Besset, Julian Raoul)', instrument1: instruments[0].name, instrument2: instruments[16].name, style: styles[5].name, link: 'https://imslp.org/wiki/6_Duos_for_Flute_and_Organ_(Besset%2C_Julian_Raoul)', index: 36 },
        { name: '6 Duos for Violin and Cello, WV 50-55 (Hoffmann, Heinrich Anton)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[2].name, link: 'https://imslp.org/wiki/6_Duos_for_Violin_and_Cello%2C_WV_50-55_(Hoffmann%2C_Heinrich_Anton)', index: 37 },
        { name: '2 Duos for Violin and Viola (Simpson, Daniel Léo)', instrument1: instruments[0].name, instrument2: instruments[10].name, style: styles[2].name, link: 'https://imslp.org/wiki/2_Duos_for_Violin_and_Viola_(Simpson%2C_Daniel_L%C3%A9o)', index: 38 },
        { name: '3 Flugelhorn Duets (Rondeau, Michel)', instrument1: instruments[9].name, instrument2: instruments[9].name, style: styles[2].name, link: 'https://imslp.org/wiki/3_Flugelhorn_Duets_(Rondeau%2C_Michel)', index: 39 },
        { name: 'Flute Duet in C minor (Frøhlich, Johannes Frederik)', instrument1: instruments[5].name, instrument2: instruments[5].name, style: styles[3].name, link: 'https://imslp.org/wiki/Flute_Duet_in_C_minor_(Fr%C3%B8hlich%2C_Johannes_Frederik)', index: 40 },
        { name: 'Flute Duet (Torre, Salvador)', instrument1: instruments[5].name, instrument2: instruments[5].name, style: styles[0].name, link: 'https://imslp.org/wiki/Flute_Duet_(Torre%2C_Salvador)', index: 41 },
        { name: 'Frost Moon (Maiorana, Michael)', instrument1: instruments[1].name, instrument2: instruments[4].name, style: styles[0].name, link: 'https://imslp.org/wiki/Frost_Moon_(Maiorana%2C_Michael)', index: 42 },
        { name: "Grand duo concertant sur le 'Le marin', S.128 (Liszt, Franz)", instrument1: instruments[0].name, instrument2: instruments[2].name, style: styles[3].name, link: "https://imslp.org/wiki/Grand_duo_concertant_sur_le_'Le_marin'%2C_S.128_(Liszt%2C_Franz)", index: 43 },
        { name: 'Grand duo concertant, Op.48 (Weber, Carl Maria von)', instrument1: instruments[3].name, instrument2: instruments[2].name, style: styles[3].name, link: 'https://imslp.org/wiki/Grand_duo_concertant%2C_Op.48_(Weber%2C_Carl_Maria_von)', index: 44 },
        { name: 'Happie Wag (Cerasi, Pierre Rolf)', instrument1: instruments[13].name, instrument2: instruments[13].name, style: styles[3].name, link: 'https://imslp.org/wiki/Happie_Wag_(Cerasi%2C_Pierre_Rolf)', index: 45 },
        { name: '10 Inventions for Flute and Clarinet (Reimer-Watts, Keenan)', instrument1: instruments[3].name, instrument2: instruments[5].name, style: styles[0].name, link: 'https://imslp.org/wiki/10_Inventions_for_Flute_and_Clarinet_(Reimer-Watts%2C_Keenan)', index: 46 },
        { name: 'LilacDance (Nikmaram, Emma)', instrument1: instruments[0].name, instrument2: instruments[2].name, style: styles[2].name, link: 'https://imslp.org/wiki/LilacDance_(Nikmaram%2C_Emma)', index: 47 },
        { name: '7 Little Duos (Allard, Michel)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[0].name, link: 'https://imslp.org/wiki/7_Little_Duos_(Allard%2C_Michel)', index: 48 },
        { name: '8 Little Duos (Allard, Michel)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[0].name, link: 'https://imslp.org/wiki/8_Little_Duos_(Allard%2C_Michel)', index: 49 },
        { name: 'Piano Duet No.2 in F major (Junck, Christian)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[2].name, link: 'https://imslp.org/wiki/Piano_Duet_No.2_in_F_major_(Junck%2C_Christian)', index: 50 },
        { name: '6 Pieces for 4 hands (Reimer-Watts, Keenan)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[0].name, link: 'https://imslp.org/wiki/6_Pieces_for_4_hands_(Reimer-Watts%2C_Keenan)', index: 51 },
        { name: "Sonata for 2 Violins 'Intimus' (Kocakov, Drago)", instrument1: instruments[0].name, instrument2: instruments[0].name, style: styles[5].name, link: "https://imslp.org/wiki/Sonata_for_2_Violins_'Intimus'_(Kocakov%2C_Drago)", index: 52 },
        { name: 'Sonata for Bassoon and Cello in B-flat major, K.292/196c (Mozart, Wolfgang Amadeus)', instrument1: instruments[1].name, instrument2: instruments[7].name, style: styles[2].name, link: 'https://imslp.org/wiki/Sonata_for_Bassoon_and_Cello_in_B-flat_major%2C_K.292%2F196c_(Mozart%2C_Wolfgang_Amadeus)', index: 53 },
        { name: 'Studie No.2 in E minor (Saldiën, Jacques)', instrument1: instruments[3].name, instrument2: instruments[15].name, style: styles[0].name, link: 'https://imslp.org/wiki/Studie_No.2_in_E_minor_(Saldi%C3%ABn%2C_Jacques)', index: 54 },
        { name: 'Suíte para oboé e sax (Dantas, Victor Vitoriano)', instrument1: instruments[6].name, instrument2: instruments[15].name, style: styles[0].name, link: 'https://imslp.org/wiki/Su%C3%ADte_para_obo%C3%A9_e_sax_(Dantas%2C_Victor_Vitoriano)', index: 55 },
        { name: 'Variations on a Theme by Mozart for 2 Pianos (Zhang, Shuwen)', instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[3].name, link: 'https://imslp.org/wiki/Variations_on_a_Theme_by_Mozart_for_2_Pianos_(Zhang%2C_Shuwen)', index: 56 },
        { name: 'Violin Duet, Op.11 (Freed, Jeffrey Alan)', instrument1: instruments[0].name, instrument2: instruments[10].name, style: styles[2].name, link: 'https://imslp.org/wiki/Violin_Duet%2C_Op.11_(Freed%2C_Jeffrey_Alan)', index: 57 },
        { name: '18 Violin Duos, Op.38 (Mazas, Jacques Féréol)', instrument1: instruments[0].name, instrument2: instruments[0].name, style: styles[3].name, link: 'https://imslp.org/wiki/18_Violin_Duos%2C_Op.38_(Mazas%2C_Jacques_F%C3%A9r%C3%A9ol)', index: 58 },
        { name: '39 Violin Duos, Op.85 (Mazas, Jacques Féréol)', instrument1: instruments[0].name, instrument2: instruments[0].name, style: styles[2].name, link: 'https://imslp.org/wiki/39_Violin_Duos%2C_Op.85_(Mazas%2C_Jacques_F%C3%A9r%C3%A9ol)', index: 59 },
        { name: 'Vivaldi Duo for Violin and Cello (Sydeman, William Jay)', instrument1: instruments[0].name, instrument2: instruments[1].name, style: styles[0].name, link: 'https://imslp.org/wiki/Vivaldi_Duo_for_Violin_and_Cello_(Sydeman%2C_William_Jay)', index: 60 },
        { name: "William's Duet(Dyson, Peter)", instrument1: instruments[2].name, instrument2: instruments[2].name, style: styles[0].name, link: "https://imslp.org/wiki/William's_Duet_(Dyson%2C_Peter)", index: 61 },
    ])

    process.exit()
})()