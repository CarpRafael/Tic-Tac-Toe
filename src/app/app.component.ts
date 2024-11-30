import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from "./board/board.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
}