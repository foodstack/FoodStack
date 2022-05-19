'use strict';

export class MenuItem {
  //public coverImage:MenuImage;
  //customizationIds: { type: DT.Undefined, hasMany: true },
  public description: string;
  public displayName: string;
  //public detailImageId:MenuImage;
  public id: number;
  public name: string;
  public ordinal: number;
  public parent: MenuItem;
  //public preparedAt: { maxLength: 250 },
  public price: number;
  //public servingDateEnd:Date;
  //public servingDateStart:Date;
  //public servingTimeEnd:Date;
  //public servingTimeStart:Date;
  //public tag:string;
  public type: string;
  //public wine:Wine;

  public static get is(): string {
    return 'fds-core-domain.MenuItem';
  }

  public constructor() { }

  // function isCustomizationItem() {
  //     return this.type == 'item_customization';
  // }

  // function getCoverImageThumbnail() {
  //     var menu = this.complexAspect.parent;
  //     return serviceName + '/image/' + this.coverImageId + '?size=thumbnail';
  // }

  // function getDetailImageThumbnail() {
  //     return serviceName + '/image/' + this.detailImageId + '?size=thumbnail';
  // }

  // function deleteItem() {
  //     var menu = this.complexAspect.parent;
  //     var item = this;

  //     //delete all child if it is a group
  //     if (this.isGroup()) {
  //         var children = this.getChildren();
  //         var child = children.pop();
  //         while (child) {
  //             child.delete();
  //             child = children.pop();
  //         }
  //     }

  //     var customizations = this.getCustomizations();  //once item spliced from the menu, getCustomization will break because of this.complexAspect.parent is null
  //     //remove itself from the items
  //     var ix = menu.items.indexOf(this);
  //     if (ix > -1) {
  //         menu.items.splice(ix, 1);
  //     }

  //     //dis-association from other customization (including upsell)
  //     _.forEach(menu.customizations, (c) => {
  //         var ix = c.itemIds.indexOf(this.id);
  //         if (ix > -1) {
  //             c.itemIds.splice(ix, 1);
  //         }
  //     });

  //     //delete customization if not use by others
  //     while (customizations.length > 0) {
  //         var customization = customizations.pop();
  //         var usingByOthers = false;
  //         _.forEach(menu.items, (i) => {
  //             _.forEach(i.customizationIds, (cid) => {
  //                 if (cid == customization.id) {
  //                     usingByOthers = true;
  //                     return false;
  //                 }
  //             });
  //             if (usingByOthers) {
  //                 return false;
  //             }
  //         });
  //         if (!usingByOthers) {
  //             customization.delete();
  //         }
  //     }
  // }

  // function getGroupOrItem() {
  //     return this.type.split('_')[0];
  // }

  // function getSubType() {
  //     return this.type.split('_').pop();
  // }

  // function isGroup() {
  //     return this.type.indexOf('group') === 0;
  // }

  // function getCustomizations() {
  //     var menu = this.complexAspect.parent;
  //     //TODO: no customizations for the parent items are included..
  //     return _.map(this.customizationIds,
  //         function (id) {
  //             return _.find(menu.customizations, { 'id': id });
  //         });
  // }

  // function getChildren() {
  //     var menu = this.complexAspect.parent;
  //     return _.filter(menu.items, { 'parentItemId': this.id });
  // }

  // //special customization, it can be upsell or size
  // function getSpecialCustomization(type) {
  //     var suffix = '_' + type + 'Customization';
  //     return _.find(this.getCustomizations(), (c:any) => {
  //         return _.endsWith(c.name, suffix);
  //     });
  // }

  // function createSpecialCustomization(type, defaultValues) {
  //     var menu = this.complexAspect.parent;
  //     if (!defaultValues) {
  //         defaultValues = {};
  //     }
  //     defaultValues.name = this.id + '_' + type + 'Customization';
  //     var customization = menu.addCustomization(defaultValues);
  //     this.customizationIds.push(customization.id);
  //     return customization;
  // }

  // function addItemToSpecialCustomization(type, item) {
  //     var menu = this.complexAspect.parent;

  //     //check if customizaiton exist
  //     var customization: any = this.getSpecialCustomization(type);
  //     if (!customization) {
  //         customization = this.createSpecialCustomization(type)
  //     }
  //     customization.itemIds.push(item.id);
  // }

  // function removeItemFromSpecialCustomization(type, item) {
  //     var menu = this.complexAspect.parent;

  //     //check if customizaiton exist
  //     var customization: any = this.getSpecialCustomization(type);
  //     if (!customization) {
  //         return;
  //     }

  //     var ix = customization.itemIds.indexOf(item.id);
  //     if (ix > -1) {
  //         customization.itemIds.splice(ix, 1);
  //     }
  // }

  // //Highlight
  // function isHighlight() {
  //     var menu = this.complexAspect.parent;
  //     return _.find(menu.highlights, { 'itemId': this.id });
  // }

  // function setHighlight(defaultValues) {
  //     var menu = this.complexAspect.parent;
  //     var highlight = _.find(menu.highlights, { 'itemId' : this.id });

  //     if (highlight) {
  //         _.merge(highlight, defaultValues);
  //         return;
  //     }

  //     defaultValues.itemId = this.id;
  //     return menu.addHighlight(defaultValues);
  // }

  // function removeHighlight() {
  //     var menu = this.complexAspect.parent;

  //     var ix = _.findIndex(menu.highlights, (h:any) => {
  //         return h.itemId == this.id;
  //     });
  //     if (ix > -1) {
  //         menu.highlights.splice(ix, 1);
  //     }
  // }


  // function createSizeCustomization(defaultValues) {
  //     return this.createSpecialCustomization('size', defaultValues);
  // }
}
