import { FoodCategory } from "src/model/foodCategory";

export class FoodItemService {
    getAllCategories(): FoodCategory[] {
        return this.data;

    }
    getAllFavoriteCategories(): FoodCategory[] {
        return this.favoritData;

    }

    data: FoodCategory[] = [
        {
            name: "Мясо", items: [{ name: "Свинина жаренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Свинина жаренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Свинина жаренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },]
        },
        {
            name: "Рыба", items: [{ name: "Карась",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Язь",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Шука",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },]
        },
        {
            name: "Кура", items: [{ name: "Кура жаренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура варенная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура вяленная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура валенная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура дымленная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура электрофецированная", description:"",normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура маринованная", description:"",normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура соленная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура паренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },]
        },
    ];

    favoritData: FoodCategory[] = [
        {
            name: "Кура", items: [{ name: "Кура жаренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура варенная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура вяленная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура валенная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура дымленная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура электрофецированная", description:"",normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура маринованная", description:"",normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура соленная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },
            { name: "Кура паренная",description:"", normalCarb: 0, normalFat: 0, normalKkal: 0, normalProt: 0, normalWater: 0, type: "0", weight: 100, },]
        },
    ];
}