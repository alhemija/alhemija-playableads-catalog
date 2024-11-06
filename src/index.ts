import './styles/index.css';
import { data } from './scripts/data'
import { App } from "./scripts/app";
import { DataLoader } from "./scripts/DataLoader";

console.log('hello world')
const dataLoader = new DataLoader('/')

const app = new App(DataLoader.getMockData())

// app.init()