import React from "react";
import { NAVIGATION_CONFIG } from "../../config/navigationConfig";
import usePolling from "@/hooks/usePolling";

export const Header = () => {
  const {
    data: response,
    loading,
    error,
  } = usePolling("http://127.0.0.1:5000/api/account", 2000);

  if (loading)
    return (
      <div className="h-16 border-b border-slate-200 bg-white px-6 flex items-center text-xs text-slate-400">
        Loading live data...
      </div>
    );
  if (error)
    return (
      <div className="h-16 border-b border-slate-200 bg-white px-6 flex items-center text-xs text-rose-500">
        Error: {error}
      </div>
    );

  const account = response?.data;
  if (!account) return null;

  const isCent = account.currency === "USC";

  // Base conversions
  const balanceInUSD = isCent ? account.balance / 100 : account.balance;
  const equityInUSD = isCent ? account.equity / 100 : account.equity;

  const balanceBDT = balanceInUSD * NAVIGATION_CONFIG.usdToBdtRate;
  const equityBDT = equityInUSD * NAVIGATION_CONFIG.usdToBdtRate;

  // Format strings using API data
  const balanceLabel = isCent
    ? `${account.balance.toLocaleString("en-US", { minimumFractionDigits: account.currency_digits || 2 })} USC`
    : `$${account.balance.toLocaleString("en-US", { minimumFractionDigits: account.currency_digits || 2 })}`;

  const equityLabel = isCent
    ? `${account.equity.toLocaleString("en-US", { minimumFractionDigits: account.currency_digits || 2 })} USC`
    : `$${account.equity.toLocaleString("en-US", { minimumFractionDigits: account.currency_digits || 2 })}`;

  // Calculate dynamic floating profit string/percentage
  const profitValue = account.profit || 0;
  const equityChangeLabel =
    profitValue >= 0
      ? `+$${profitValue.toFixed(2)}`
      : `-$${Math.abs(profitValue).toFixed(2)}`;

  const badgeIcon = isCent ? "¢" : "$";
  const badgeColorClass = isCent
    ? "bg-amber-50 border-amber-200 text-amber-700"
    : "bg-indigo-50 border-indigo-200 text-indigo-700";

  return (
    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Brand Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-base tracking-wider">
          {NAVIGATION_CONFIG.appName.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm tracking-tight text-slate-900 leading-none">
            {NAVIGATION_CONFIG.appName}
          </span>
          <span className="text-[10px] text-slate-400 font-medium tracking-widest mt-0.5 uppercase">
            {NAVIGATION_CONFIG.appSubtitle}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm">
        {/* Total Volume Readout */}
        <div className="hidden 2xl:flex items-center gap-4 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-lg">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Total Vol (USD)
            </span>
            <span className="font-semibold text-slate-900 font-mono text-xs">
              ${Number(account.trading_volume ?? 0).toFixed(2)}
            </span>
          </div>

          <div className="h-5 w-px bg-slate-200" />

          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Total Vol (BDT)
            </span>
            <span className="font-semibold text-indigo-600 font-mono text-xs">
              ৳
              {(
                Number(account.trading_volume ?? 0) *
                NAVIGATION_CONFIG.usdToBdtRate
              ).toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-200 hidden 2xl:block" />

        {/* Account Info from Live API */}
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded border font-semibold text-xs flex items-center justify-center ${badgeColorClass}`}
          >
            {badgeIcon}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800 text-xs leading-tight">
                {account.name}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase font-mono bg-slate-100 text-slate-600 border border-slate-200">
                {account.currency}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              #{account.login} • {account.server}
            </div>
          </div>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        {/* Live Balance & Equity */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              Balance
            </span>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="font-semibold text-slate-900 text-xs">
                {balanceLabel}
              </span>
              <span className="text-slate-400 text-[11px]">
                / ৳
                {balanceBDT.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                Equity
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="font-semibold text-emerald-600 text-xs">
                {equityLabel}
              </span>
              <span className="text-slate-400 text-[11px]">
                / ৳
                {equityBDT.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
