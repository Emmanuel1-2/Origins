

const products = [
    /* Skincare */
    {
        name: "Origins Ultra Hydrating Moisturiser",
        image: "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Deeply hydrates dry skin, restores elasticity, smooths texture, prevents flaking.",
        price: 34,
        id: 1
    },
    {
        name: "Origins Black Pumps Moisturiser",
        image: "https://images.unsplash.com/photo-1694101395622-65100ea10a0c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich moisturizer for intense nourishment, soothes irritation, restores skin barrier.",
        price: 49,
        id: 2
    },
    {
        name: "Origins HFO Hydrating Daycream",
        image: "https://images.unsplash.com/photo-1640967378393-505b5a7b0bd6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Light day cream hydrates, primes, protects moisture, gives healthy glow.",
        price: 62,
        id: 3
    },
    {
        name: "Origins Body Butter Nightcream",
        image: "https://images.unsplash.com/photo-1732861612298-969e145fc4b7?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich night butter restores moisture overnight, repairs, soothes dry patches.",
        price: 75,
        id: 4
    },
    {
        name: "Origins SKIN Body Moisturiser",
        image: "https://images.unsplash.com/photo-1732861612298-969e145fc4b7?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lightweight body moisturizer absorbs quickly, hydrates, smooths, and softens skin.",
        price: 75,
        id: 5
    },
    {
        name: "Origins Ela De Pure Facial Cleanser",
        image: "https://images.unsplash.com/photo-1748639320154-6ba118bccc74?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Gentle facial cleanser removes dirt, makeup, oil without stripping moisture.",
        price: 63,
        id: 6
    },
    {
        name: "Origins Curology Facial Cleanser",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Deep-cleansing face wash targets impurities, unclogs pores, refreshes complexion gently.",
        price: 82,
        id: 7
    },
    {
        name: "Origins Plantadia Facial Cleanser",
        image: "https://images.unsplash.com/photo-1670087603718-6f189b39865b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Plant-based cleanser soothes, calms redness, cleanses, preserves natural skin balance.",
        price: 87,
        id: 8
    },
    {
        name: "Origins FaceBK Facial Cleanser",
        image: "https://images.unsplash.com/photo-1695972235496-1a99b8e304fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Refreshing cleanser removes dirt, revitalizes complexion, reduces oil, brightens skin.",
        price: 37,
        id: 9
    },
    {
        name: "Origins Beauty Facial Cleanser",
        image: "https://images.unsplash.com/photo-1612369454298-1997a6baad92?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Brightening cleanser evens tone, removes impurities, improves radiance and clarity.",
        price: 77,
        id: 10
    },

    /* Skincare */
    {
        name: "Origins Minimalist SPF 50 Sunscreen",
        image: "https://images.unsplash.com/photo-1728487890426-e458ed07122f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "High-protection SPF shields skin from UVA/UVB, prevents sun damage daily.",
        price: 182,
        id: 11
    },
    {
        name: "Origins Essence SPF 45 Sunscreen",
        image: "https://images.unsplash.com/photo-1686831451322-8d8e234a51e1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lightweight SPF essence hydrates, protects, absorbs quickly, ideal for wear.",
        price: 180,
        id: 12
    },
    {
        name: "Origins Angels Sunscreen",
        image: "https://plus.unsplash.com/premium_photo-1675896042153-9dc08f9c9599?q=80&w=635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Broad-spectrum sunscreen lotion. Sun fun run spun begun shun stun won ton one",
        price: 143,
        id: 13
    },

    {
        name: "Origins Minimalist Face Serum",
        image: "https://images.unsplash.com/photo-1695782768559-0de6aa794b77?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Concentrated serum targets fine lines, boosts hydration, firms and brightens.",
        price: 123,
        id: 14
    },
    {
        name: "Origins Minimalist face serum",
        image: "https://images.unsplash.com/photo-1695782768559-0de6aa794b77?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Hydrating serum delivers lightweight moisture, improves texture, soothes and protects.",
        price: 123,
        id: 15
    },

    /* Skincare */
    {
        name: "Origins Rosewood Skin Toner",
        image: "https://images.unsplash.com/photo-1608571702600-5a5419d31475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
        description: "Soothing rosewood toner balances pH, reduces redness, refines pores, calms.",
        price: 32,
        id: 16
    },
    {
        name: "Origins Blackbar Skin Toner",
        image: "https://plus.unsplash.com/premium_photo-1669735916387-24340468a65c?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Clarifying toner removes impurities, tightens pores, refreshes and evens skin.",
        price: 48,
        id: 17
    },
    {
        name: "Origins Ela De Pure Aloe Vera Face Mask ",
        image: "https://plus.unsplash.com/premium_photo-1669735916387-24340468a65c?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Aloe face mask soothes irritation, hydrates deeply, heals, cools skin.",
        price: 48,
        id: 18
    },
    {
        name: "Origins Ela De Pure Collagen Face Mask",
        image: "https://images.unsplash.com/photo-1743928217924-77ec5f39c4fb?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Collagen mask firms skin, improves elasticity, reduces lines, restores bounce.",
        price: 98,
        id: 19
    },
    {
        name: "Origins Ela De Pure Vitamin C Face Mask",
        image: "https://images.unsplash.com/photo-1748387142892-e5c7fc2c415f?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Vitamin C mask brightens skin, fades spots, boosts radiance, renewal.",
        price: 51,
        id: 20
    },

    /* Cosmetics */
    {
        name: "Origins Da Santos Lipstick",
        image: "https://images.unsplash.com/photo-1619352520578-8fefbfa2f904?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Long-wear lipstick provides rich color, smooth finish, hydrating comfortable wear.",
        price: 241,
        id: 21
    },
    {
        name: "Origins Dellare Infamos Lipstick",
        image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Highly pigmented lipstick delivers bold color, precise application, lasting shine.",
        price: 264,
        id: 22
    },
    {
        name: "Origins Sephora Light Foundation",
        image: "https://images.unsplash.com/photo-1627885793933-584e53987c14?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Light foundation evens tone, blurs imperfections, provides natural finish coverage.",
        price: 89,
        id: 23
    },
    {
        name: "Origins Airbrush Flawless Foundation",
        image: "https://images.unsplash.com/photo-1632038559953-abd80bed8966?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Airbrush foundation smooths skin, builds coverage, creates flawless camera-ready finish.",
        price: 99,
        id: 24
    },
    {
        name: "Origins Dellare Makeup Blush",
        image: "https://images.unsplash.com/photo-1583241800804-8eea95214a87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Cream blush adds healthy color, blends easily, gives long-lasting radiance.",
        price: 102,
        id: 25
    },
    {
        name: "Origins Nexun Gold Mascara",
        image: "https://images.unsplash.com/photo-1512207159096-c2c91b1dfadd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Gold-toned mascara adds volume, defines lashes, resists flaking, adds shimmer.",
        price: 71,
        id: 26
    },
    {
        name: "Origins Black Ceramic Mascara",
        image: "https://images.unsplash.com/photo-1695102161659-ef75ae176e7f?q=80&w=390&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Black ceramic mascara lengthens and volumizes lashes with smudge-proof finish.",
        price: 72,
        id: 27
    },
    {
        name: "Origins Black E7 Eye Pencil",
        image: "https://images.unsplash.com/photo-1704177094042-71a098cae1fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sharp eyeliner pencil draws precise lines, smudge-resistant, ideal for definition.",
        price: 22,
        id: 28
    },

    /* Bodycare */
    {
        name: "Origins Aveeno Body Lotion",
        image: "https://images.unsplash.com/photo-1551446339-1e5c6f164ec2?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Daily body lotion soothes, restores moisture, strengthens skin barrier, hydrates.",
        price: 37,
        id: 29
    },
    {
        name: "Origins Milk Body Lotion",
        image: "https://images.unsplash.com/photo-1704307068094-c2c88c467014?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Milk-infused lotion nourishes and soothes, absorbs quickly, leaves skin silky.",
        price: 42,
        id: 30
    },

    {
        name: "Origins Salt & Stone Body Wash",
        image: "https://images.unsplash.com/photo-1700107648901-02970a78a2cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Salt body wash exfoliates, detoxifies, invigorates skin, smooths, restores softness.",
        price: 142,
        id: 31
    },
    {
        name: "Origins Everdrops Body Wash",
        image: "https://images.unsplash.com/photo-1642505173080-94af65712218?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Gentle body wash cleanses, hydrates, soothes irritation, leaves skin refreshed.",
        price: 122,
        id: 32
    },
    {
        name: "Origins Amaranth Body Oil",
        image: "https://images.unsplash.com/photo-1766241883912-a665e7af9132?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Nourishing body oil locks in moisture, softens skin, improves elasticity.",
        price: 79,
        id: 33
    },

    /* Haircare */
    {
        name: "Origins Ela De Pure Hair Shampoo",
        image: "https://images.unsplash.com/photo-1747858989102-cca0f4dc4a11?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Gentle shampoo cleanses scalp, removes buildup, restores shine and manageability.",
        price: 19,
        id: 34
    },
    {
        name: "Origins MockUp Hair Shampoo",
        image: "https://images.unsplash.com/photo-1701992679059-8631c83df108?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Daily shampoo gently cleans hair, maintains moisture, prevents dryness, frizz.",
        price: 24,
        id: 35
    },
    {
        name: "Origins Salt Tonic Hair Spray",
        image: "https://images.unsplash.com/photo-1775126250994-abfb4656dfc4?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Salt tonic adds texture, enhances volume, creates beachy waves hold.",
        price: 18,
        id: 36
    },
    {
        name: "Origins Pump Hair Conditioner",
        image: "https://images.unsplash.com/photo-1699158660187-ef33934076d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Hydrating conditioner detangles, smooths strands, restores softness and prevents breakage.",
        price: 20,
        id: 37
    },


]

export default function getProducts(){
    return products
}

