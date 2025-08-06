import React from 'react';

interface FinancialSummaryProps {
  data: Record<string, string | number>;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({ data }) => {
  return (
    <div className="border-success/30 bg-gradient-to-br from-success/10 to-success/5 shadow-md rounded-lg p-4 mt-4">
      <h4 className="font-semibold text-foreground mb-3 flex items-center">
        📊 Financial Summary
      </h4>
      <div className="space-y-1 text-foreground">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span>{key}:</span>
            <span className="font-medium">{typeof value === 'number' && value >= 1000 ? `$${value.toLocaleString()}` : value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};