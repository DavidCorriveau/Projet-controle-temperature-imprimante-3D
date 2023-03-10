import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PSUState, TemperatureReading } from '../../model';
import { EnclosureStatus } from '../../model/octoprint';

@Injectable()
export abstract class EnclosureService {

  // Méthode modifiable qui permet d'aller chercher les données du capteur de l'enceinte. Définit dans enclosure.octoprint.services.ts
  abstract getEnclosureTemperature(identifier: number): Observable<TemperatureReading>;

  // Méthode modifiable qui permet d'aller chercher les données du capteur pour l'emplacement des filament. Définit dans enclosure.octoprint.services.ts
  abstract getTemperatureSetValue(identifier: number): Observable<number>;

  abstract getEnclosureStatusSubscribable(): Observable<EnclosureStatus>;

  /* 
  * @brief: Méthode modifiable qui permet d'ajuster la température désirée dans OctoPrint pour un élément chauffant. Définit dans enclosure.octoprint.services.ts
  * @param identifier: ID de l'élément chauffant qu'on lui applique une température cible
  * @param temperature: Température cible que l'élément chauffant doit atteindre
  */
  abstract setTemperatureHeater(identifier: number, temperature: number): void;

  abstract setLEDColor(identifier: number, red: number, green: number, blue: number): void;

  abstract setOutput(identifier: number, status: boolean): void;

  abstract setOutputPWM(identifier: number, dutyCycle: number): void;

  abstract runEnclosureShell(identifier: number): void;

  abstract setPSUState(state: PSUState): void;

  abstract togglePSU(): void;
}
