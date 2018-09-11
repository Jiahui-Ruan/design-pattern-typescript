export interface ISmartDevice {
    call(contact: string): void;
    sendSms(contact: string, content: string): void;
    openApp(path: string): void;
    connectToWifi(ssid: string, password: string): void;
}

export class SmartPhone implements ISmartDevice {
    call(contact: string): void {
        console.log(`Calling ${contact}`);
    }
    sendSms(contact: string, content: string): void {
        console.log(`Sending sms to ${contact}`)
    }
    openApp(path: string): void {
        console.log(`Open app ${path}`)
    }
    connectToWifi(ssid: string, password: string): void {
        console.log(`connect to wifi ${ssid}`)
    }
}
