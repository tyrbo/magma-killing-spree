// Killing Spree Plugin
// By Peak

function On_PlayerKilled(DeathEvent) {
  if (DeathEvent.Attacker.SteamID != DeathEvent.Victim.SteamID) {
    var CurrentSpree = GetCurrentKillingSpree(DeathEvent.Attacker.SteamID) + 1;
    SetKillingSpree(DeathEvent.Victim.SteamID, 0);
    SetKillingSpree(DeathEvent.Attacker.SteamID, CurrentSpree);
    ShowKillingSpreeNotification(CurrentSpree, DeathEvent.Attacker.Name)
  }
}

function GetCurrentKillingSpree(SteamID) {
  var KillingSpree = Data.GetTableValue("killingspree", SteamID);

  if (KillingSpree == null) {
    return 0;
  } else {
    return KillingSpree;
  }
}

function SetKillingSpree(SteamID, Spree) {
  return Data.AddTableValue("killingspree", SteamID, Spree);
}

function ShowKillingSpreeNotification(CurrentSpree, Name) {
  if (CurrentSpree == 5) {
    Server.BroadcastNotice(Name + " is on a killing spree!");
  } else if (CurrentSpree == 10) {
    Server.BroadcastNotice(Name + " is on a rampage!");
  } else if (CurrentSpree == 15) {
    Server.BroadcastNotice(Name + " is dominating!");
  } else if (CurrentSpree == 20) {
    Server.BroadcastNotice(Name + " is unstoppable!");
  } else if (CurrentSpree == 25) {
    Server.BroadcastNotice(Name + " is godlike!");
  }
}
