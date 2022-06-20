import { HistoryData } from "src/model/historyData";
import { HistoryDataDay } from "src/model/HistoryDataDay";
import { HistoryDataWeek } from "src/model/HistoryDataWeek";

export class HistoryService {

    getSumForDay(day: Date): HistoryData {
        console.log(this.data.filter(dt => dt.week == 24)[0])
        return this.getSum(this.getHistoryForDay(day).data);
    }

    getSumForWeek(week: number): HistoryDataWeek {
        return this.data.filter(dt => dt.week == week)[0];
    }

    getSum(data: HistoryData[]): HistoryData {
        let sum:HistoryData = {name:"sum",carb:0,fat:0,kkal:0,prot:0,water:0,};
        const sumF = function(dt:HistoryData){
            sum.carb += dt.carb;
            sum.fat += dt.fat;
            sum.kkal += dt.kkal;
            sum.water += dt.water;
            sum.prot += dt.prot;
        }
        data.forEach(dt => sumF(dt));
        return sum;
    }

    getAvg(data: HistoryData[]): HistoryData {
        let sum:HistoryData = this.getSum(data);
        sum.carb = Math.ceil(sum.carb/data.length);
        sum.fat = Math.ceil(sum.fat/data.length);
        sum.kkal = Math.ceil(sum.kkal/data.length);
        sum.water = Math.ceil(sum.water/data.length);
        sum.prot = Math.ceil(sum.prot/data.length); 
        sum.name = "Cреднее";
        return sum;
    }

    getAvgForDay(date:Date): HistoryData {
        
        return this.getAvg(this.getHistoryForDay(date).data);
    }

    getAvgForWeek(): HistoryData {
        return { name: "0", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, };
    }


    getHistoryForDay(day: Date): HistoryDataDay {
        let data = this.data.flatMap(d => d.data).filter(dt => (Math.ceil((dt.date.getTime() - day.getTime()) / (24 * 60 * 60 * 1000)) == 0))[0];
        data = data == undefined ? this.emptyHistoryDay:data;
        return data;
    }

    getHistoryForWeek(date: Date): HistoryData {

        return { name: "0", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, }
    }

    weekNumber(date: Date) {
        var date1 = new Date(date);
        var oneJan = new Date(date1.getFullYear(), 0, 1);
        var numberOfDays = Math.floor((date1.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
        var result = Math.ceil((numberOfDays) / 7);
        return result;
    }

    emptyHistory:HistoryData = {carb:0,fat:0,kkal:0,name:"empty",prot:0,water:0,};
    emptyHistoryDay:HistoryDataDay = {date:new Date(),data:[this.emptyHistory,this.emptyHistory,this.emptyHistory,this.emptyHistory,this.emptyHistory,this.emptyHistory,this.emptyHistory,this.emptyHistory,this.emptyHistory,]};


    data: HistoryDataWeek[] = [{
        data: [{
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-13")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-14")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-15")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-16")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-17")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-18")
        },
        {
            data: [{ name: "Завтрак", carb: 200, fat: 0, kkal: 251, prot: 0, water: 0, },
            { name: "пережор", carb: 20, fat: 0, kkal: 50, prot: 0, water: 0, },
            { name: "дожор", carb: 20, fat: 0, kkal: 19, prot: 25, water: 0, },
            { name: "Обед", carb: 300, fat: 60, kkal: 423, prot: 0, water: 0, },
            { name: "пережор", carb: 30, fat: 0, kkal: 52, prot: 0, water: 0, },
            { name: "дожор", carb: 30, fat: 30, kkal: 11, prot: 0, water: 0, },
            { name: "Ужин", carb: 150, fat: 0, kkal: 563, prot: 15, water: 0, },
            { name: "пережор", carb: 15, fat: 0, kkal: 21, prot: 0, water: 0, },
            { name: "дожор", carb: 15, fat: 0, kkal: 10, prot: 0, water: 0, },],
            date: new Date("2022-06-19")
        },
        ], week: this.weekNumber(new Date("2022-06-19")),
    },
    {
        data: [{
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-13")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-14")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-15")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-16")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-17")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-18")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-19")
        },
        ], week: this.weekNumber(new Date("2022-06-10")),
    },
    {
        data: [{
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-13")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-14")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-15")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-16")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-17")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-18")
        },
        {
            data: [{ name: "Завтрак", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Обед", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "Ужин", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "пережор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },
            { name: "дожор", carb: 0, fat: 0, kkal: 0, prot: 0, water: 0, },],
            date: new Date("2022-06-19")
        },
        ], week: this.weekNumber(new Date("2022-06-26")),
    },];

}