---
title: "How to Build a Climate Controlled Incubator for Your Chicken Coop"
publishDate: "2025-02-28"
description: "A comprehensive DIY guide to creating a climate controlled incubator for your chicken coop using ESP32, DHT22, PTC heater, ultrasonic humidifier, and MOSFETs."
tags:
  - DIY
  - Incubator
  - Chicken Coop
  - ESP32
  - IoT
  - Poultry
---

## How to Build a Climate Controlled Incubator for Your Chicken Coop

Creating a climate controlled incubator is a smart way to ensure the best environment for hatching eggs in your chicken coop. In this guide, you'll learn how to build an incubator that maintains optimal temperature and humidity using a blend of high-power components and low-power smart electronics. The project uses an ESP32 microcontroller, a DHT22 sensor, a PTC heater, an ultrasonic humidifier, and MOSFET switches, all powered by a 12V power supply and a buck converter for 5V components.

## Why Build a Climate Controlled Incubator?

Maintaining a stable environment is crucial for successful hatching. A climate controlled incubator can:

- **Increase Hatch Rates:** Consistent conditions foster better embryo development.
- **Enhance Energy Efficiency:** Only activate components as needed, saving energy.
- **Offer Precision Control:** Use an ESP32 to monitor and adjust environmental conditions in real time.

## Key Components

Before starting, ensure you have the following components:

- **12V Power Supply (e.g., 12V, ~10A adapter):** Powers both high-current devices and feeds the buck converter.
- **Buck Converter (12V → 5V):** Steps down the voltage for low-power electronics.
- **ESP32 Microcontroller:** Processes sensor data and controls the system.
- **DHT22 Sensor:** Monitors temperature and humidity.
- **PTC Heater:** Provides heat when needed.
- **Ultrasonic Humidifier:** Adds moisture to maintain the correct humidity level.
- **MOSFETs:** Serve as electronic switches to control high-power devices.
- **Optional 12V DC Fans:** Improve air circulation, either connected directly or controlled via MOSFETs.

## The Circuit Diagram Explained

Below is an ASCII diagram that shows how each component connects:

Below is a simplified circuit diagram that shows which components connect where. This diagram assumes you have a 12 V power supply that feeds both the high-power parts (heater and fans) and—after a voltage conversion—a low-voltage (5 V) rail that powers the microcontroller, sensor, and humidifier. Components like the heater and humidifier are switched “on” by the microcontroller using MOSFETs (which act like electronic switches).

Below is an ASCII diagram to illustrate the connections:

```plaintext
                        +--------------------------------+
                        | 12V Power Supply (12V, ~10A)    |
                        +----------------+---------------+
                                         │
              ┌──────────────────────────┴────────────────────────┐
              │                                               │
              │                                               │
       +------+-------+                               +-------+-------+
       | Buck         |                               | Heater Branch |
       | Converter    |                               | (PTC Heater)  |
       | (12V → 5V)   |                               |               |
       +------+-------+                               +-------+-------+
              │                                               │
              ▼                                               │
       +---------------+                                        │
       |    5V Rail    |<---------------------------------------┘
       +-------+-------+
              │
              │
              ├───────────────────────────────┐
              │                               │
              ▼                               ▼
      +---------------+              +-------------------------+
      |   ESP32       |              | Ultrasonic Humidifier   |
      | Microcontroller|             | Module (5V powered)     |
      +------+--------+              +-----------+-------------+
             │                                  │
             │                                  │
             │                   (Switched on/off by a MOSFET driven by ESP32)
             │
             │
             └────> DHT22 Sensor (Temperature & Humidity)
                       │
                       │  (Powered from 5V Rail)
                       ▼
              [Sensor Data to ESP32]
              
              
  (Optional Fan Control)
              │
              └──────────── (Directly connected to 12V or via its own MOSFET switch)
              ▼
         +-----------+
         |  Fans     |
         | (12V DC)  |
         +-----------+
```

### Explanation of the Diagram

1. **12V Power Supply:**  
   - This is your main power source (e.g., a 12 V, 10 A adapter).
   - It feeds two main branches:
     - **High-Power Branch:** Directly powering the heater (and fans).
     - **Buck Converter:** Steps down the 12 V to 5 V for the microcontroller and low-power devices.

2. **Buck Converter (12V to 5V):**  
   - Converts 12 V to 5 V.  
   - The 5V output (5V Rail) supplies the ESP32 and DHT22 sensor.

3. **ESP32 Microcontroller:**  
   - Runs the program that reads the DHT22 sensor (measuring temperature and humidity).
   - Sends control signals (using its GPIO pins) to:
     - A MOSFET controlling the heater (in the Heater Branch).
     - A MOSFET controlling the ultrasonic humidifier.
   - Optionally, it can also control fans if you choose to use a MOSFET for fan speed control; otherwise, fans can be wired directly to 12V.

4. **DHT22 Sensor:**  
   - Connected to the 5V Rail (and ground) and sends temperature/humidity data to the ESP32.

5. **Heater Branch (PTC Heater):**  
   - Powered by 12 V, the heater is switched on or off by a MOSFET (controlled by the ESP32).  
   - The MOSFET acts as an electronic switch so that the microcontroller can control when the heater is powered without handling high current directly.

6. **Ultrasonic Humidifier:**  
   - Runs on 5 V (from the buck converter) and is switched on/off via a MOSFET controlled by the ESP32.
   - This adds moisture when the DHT22 sensor detects low humidity.

7. **Fans (Optional Control):**  
   - Computer fans used for air circulation can be connected directly to the 12 V supply.
   - Alternatively, if you want to control the fan speed, you can also add a MOSFET switch controlled by the ESP32.

---

This diagram should serve as a clear “roadmap” of how the parts are connected. Each “branch” is kept separate by the voltage conversion and switching circuits so that high-current devices (heater/fans) and low-power electronics (ESP32, DHT22, humidifier) work together safely.

If you need further details or a more graphical schematic later, you can use a tool like Fritzing or EasyEDA to create a visual diagram based on this design.

Will keep you guys posted on how it goes.
