/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: NetDataEvent
module Shumway.AVMX.AS.flash.events {
  export class NetDataEvent extends flash.events.Event {

    static classInitializer: any = null;

    static classSymbols: string [] = null;
    static instanceSymbols: string [] = null;

    timestamp: number;
    info: ASObject;

    constructor(type: string, bubbles: boolean = false, cancelable: boolean = false,
                timestamp: number = 0, info: ASObject = null) {
      super(type, bubbles, cancelable);
      this.timestamp = +timestamp;
      this.info = info;
    }

    // JS -> AS Bindings
    static MEDIA_TYPE_DATA: string = "mediaTypeData";
  }
}
