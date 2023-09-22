---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Internal"
menu:
  main:
    weight: 40
---

<html>
   <body>
      <script>
         var password = "100upet";
         (function passcodeprotect() {
            var passcode = prompt("Internal pages. Please, enter the password");
            while (passcode !== password) {
               alert("Incorrect PassCode");
               return passcodeprotect();
            }
         }());
      </script>
   </body>
</html>
