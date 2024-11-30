import { Component, OnInit, NgModule } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { NgFor, NgIf } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-board',
  imports: [SquareComponent, NgIf, NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = true;
  gameEnded: boolean = false;
  isDraw: boolean = false;
  winner: string = "";

  constructor() {}

  ngOnInit(): void {
      this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill("");
    this.winner = "";
    this.xIsNext = true;
    this.gameEnded = false;
    this.isDraw = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if(!this.gameEnded)  
      if(!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }

      if (!this.squares.includes("")) {
        this.isDraw = true;
        this.gameEnded = true;
      }

      this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const combinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for (let i = 0 ; i < combinations.length; i++) {
      const [a,b,c] = combinations[i];

      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.gameEnded = true;
        return this.squares[a];
      }
    }
    return "";
  }

}
