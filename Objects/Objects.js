const computer = {
  ramGB: 16,
  hdType: "ssd",
  gpuGB: 8,
  cpu: {
    make: "intel",
    type: "i7",
    cores: 20,
  },
  usbItems: [
    {
      type: "USB-A",
      version: 3.0,
    },
    {
      type: "USB-A",
      version: 2.0,
    },
    {
      type: "USB-C",
      version: 3.0,
    },
  ],
  id: Math.random(),
  os: "windows",
  // basically a random way of getting true / false
  hasUpdates: () => Math.random() > 0.5,
  name: "Bill Gates",
  password: "",
  // THIS
  getName: function () {
    return this.name;
  },
  getSelf: function () {
    return this;
  },
  whatIsThis: this,
  // Getter
  get getUserName() {
    return "Nick";
  },
  // Setter
  set setPassword(value) {
    this.password = value;
  },
  driveContents: {
    c: {
      folder1: {
        item1: undefined,
      },
    },
    d: {
      folder1: {
        item1: {
          item2: {
            item3: {
              secretDirectory: [
                  folder1: {
                      content: 1,
                  },
                  folder2: {
                      content: "Folder2 Content",
                  },
                  folder3: {
                    content: {
                      moreContent: {
                        evenMoreContent: {
                            message: "How deep does this go?"
                        }
                      }
                    }
                  }
              ],
            },
          },
        },
      },
    },
  },
};

/*
 Access the computer's OS via:
  a. dot notation
  b. bracket notation

4. Access the computer's Ram via:
  a. dot notation
  b. bracket notation

5. Access the computer's USB items as a whole (without a loop) - all items.
6. Access the 3rd USB item's type and version using both dot notation and bracket notation.
*/

// Access the computer's OS via dot notation
const computerOSDot = computer.os;
console.log(computerOSDot);
// Access the computer's OS via bracket notation
const computerOSBracket = computer["os"];
console.log(computerOSBracket);
// Access the computer's RAM via dot notation
const computerRAMDot = computer.ramGB;
console.log(computerRAMDot);
// Access the computer's RAM via bracket notation
const computerRAMBracket = computer["ramGB"];
console.log(computerRAMBracket);

const usbItems = computer.usbItems;
console.log(usbItems);
const thirdUsbItemTypeDot = usbItems[2].type;
console.log(`Dot notation: ${thirdUsbItemTypeDot}`);
const thirdUsbItemTypeBracket = usbItems[2]["type"];
console.log(`Bracket Notation: ${thirdUsbItemTypeBracket}]`);

// On the computer's "d" drive, access the most inner folder's content that read's "Folder2 Content".
const dDriveContent =
  computer.driveContents.d.folder1.item1.item2.item3.secretDirectory['folder2'].content;
console.log(dDriveContent);
