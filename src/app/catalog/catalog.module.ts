import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared/shared.module";
import { CatalogComponent } from "./catalog.component";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { FilterClassesService } from "./filter-classes.service";

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService, FilterClassesService],
  exports: [],
})
export class CatalogModule {}
