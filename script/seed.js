const { db, models } = require('../server/db/index')
const { User, Review, Ad } = models

const seed = async () => {
    await db.sync({ force: true })

    // Create users
    const adminUser = await User.create({
        username: 'Admin',
        password: '123',
        email: 'admin@example.com',
        address: '123 Admin St',
        description: 'I am the admin user',
        userType: 'individual',
        isAdmin: true,
        latitude: 90,
        longitude: 90,
    })

    const individualUser = await User.create({
        username: 'Individual',
        password: '123',
        email: 'individual@example.com',
        address: '456 Individual St',
        description: 'I am the individual user',
        userType: 'individual',
        latitude: 90,
        longitude: 90,
    })

    const communityUser = await User.create({
        username: 'CommunityEats',
        password: '123',
        email: 'organization2@example.com',
        address: '321 Community Lane, Lower Manhattan',
        description:
            'Community Eats is an organization committed to providing nutritious meals to underserved communities and fostering food security initiatives.',
        userType: 'organization',
        latitude: 40.714352,
        longitude: -74.005973,
    })

    const midManhattanUser = await User.create({
        username: 'MidtownEats',
        password: '123',
        email: 'organization8@example.com',
        address: '123 Tasty Street, Midtown Manhattan',
        description:
            'Midtown Eats is a culinary organization dedicated to showcasing the vibrant food scene in Midtown Manhattan.',
        userType: 'organization',
        latitude: 40.754932,
        longitude: -73.984016,
    })

    const downtownUser = await User.create({
        username: 'DowntownDelights',
        password: '123',
        email: 'organization6@example.com',
        address: '789 Tasty Avenue, Downtown Brooklyn',
        description:
            'Downtown Delights is a local food initiative bringing delicious flavors and culinary experiences to the heart of Brooklyn.',
        userType: 'organization',
        latitude: 40.692919,
        longitude: -73.986792,
    })

    const gardenUser = await User.create({
        username: 'GardenFresh',
        password: '123',
        email: 'restaurant1@example.com',
        address: '456 Organic Street, Lower Manhattan',
        description:
            'At Garden Fresh, we specialize in farm-to-table cuisine, offering fresh and locally sourced ingredients for a delightful dining experience.',
        userType: 'organization',
        latitude: 40.705776,
        longitude: -74.008955,
    })

    const dinosaurBarbBQue = await User.create({
        username: 'Dinosaur Bar-B-Q',
        password: '123',
        email: 'dinosaur@example.com',
        address: '604 Union St, Brooklyn, NY 11215',
        description:
            'Barbecue chain serving Southern-style meats & draft brews in a retro setting with live music.',
        userType: 'organization',
        latitude: '40.677685',
        longitude: '-73.98401',
    })

    const daClaudio = await User.create({
        username: 'Da Claudio',
        password: '123',
        email: 'daclaudio@example.com',
        address: '21 Ann St, New York, NY 10038',
        description:
            'This white-tiled Italian bar offers small plates & higher-end entrees to go with wine & cocktails.',
        userType: 'organization',
        latitude: '40.71075',
        longitude: '-74.00768',
    })

    // Create reviews
    const adminReview = await Review.create({
        comment: 'This is a review by admin user.',
        userId: adminUser.id,
        organizationId: gardenUser.id,
    })

    const individualReview = await Review.create({
        comment: 'This is a review by individual user.',
        userId: individualUser.id,
        organizationId: gardenUser.id,
    })

    // Create ad
    const gardenAd = await Ad.create({
        title: 'Get Your Corn!!',
        description: 'Delicious food available',
        availableFrom: new Date(),
        availableUntil: new Date(),
        isExpired: false,
        coming: 10,
        organizationId: gardenUser.id,
        imageUrl:
            'https://assets.epicurious.com/photos/54af5217c4a891cc44cce500/1:1/w_910,h_910,c_limit/51179080_grilled-corn_1x1.jpg',
    })

    const midManhattanAd = await Ad.create({
        title: 'Come get free salads!!',
        description:
            'Discover the diverse range of flavors and culinary experiences available in the heart of Midtown Manhattan.',
        availableFrom: new Date(),
        availableUntil: new Date(),
        isExpired: false,
        coming: 10,
        organizationId: midManhattanUser.id,
        imageUrl:
            'https://barefeetinthekitchen.com/wp-content/uploads/2017/12/Salads-Everyday-5-1-of-1.jpg',
    })

    const downtownAd = await Ad.create({
        title: 'Free Salmon!',
        description:
            'Experience a variety of mouthwatering cuisines and vibrant culinary events in the heart of Brooklyn.',
        availableFrom: new Date(),
        availableUntil: new Date(),
        isExpired: false,
        coming: 10,
        organizationId: downtownUser.id,
        imageUrl:
            'https://hips.hearstapps.com/hmg-prod/images/grilled-honey-chipotle-salmon-foil-packet-with-summer-squash1-1657290268.jpg',
    })

    const communityAd = await Ad.create({
        title: 'Burgers for free!',
        description: 'Giving away free cheese burgers!',
        availableFrom: new Date(),
        availableUntil: new Date(),
        isExpired: false,
        coming: 10,
        organizationId: communityUser.id,
        imageUrl:
            'https://hips.hearstapps.com/hmg-prod/images/copycat-shake-shack-burger-4-min-1649427734.jpg',
    })

    const dinosaurAd = await Ad.create({
        title: 'Come and get some ribs!',
        description: "Extra ribs from tonight's dinner service!",
        availableFrom: new Date(),
        availableUntil: new Date(),
        isExpired: false,
        coming: 10,
        organizationId: dinosaurBarbBQue.id,
        imageUrl:
            'https://media-cdn2.greatbritishchefs.com/media/vd0i3v43/26-april-selects-6.whqc_1426x713q90.jpg',
    })

    const daClaudioAd = await Ad.create({
        title: 'Extra tomato dishes!',
        description:
            'Too many tomato dishes were made. If you enjoy tomatos come and ge free tomatoes!',
        availableFrom: new Date(),
        availableUntil: new Date(),
        isExpired: false,
        coming: 10,
        organizationId: daClaudio.id,
        imageUrl:
            'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2019-07-recipe-juiciest-tomato-salad%2FBest-Juiciest-Tomato-Salad_021',
    })

    console.log('Database seeded successfully')
}

seed()
    .then(() => {
        console.log('Seeding complete')
        db.close()
    })
    .catch((err) => {
        console.error('Error seeding database:', err)
        db.close()
    })
