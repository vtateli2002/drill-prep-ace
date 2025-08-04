import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface CellData {
  [key: string]: string;
}

const ExcelUtility = () => {
  const [cells, setCells] = useState<CellData>({});
  
  const columns = ['A', 'B', 'C', 'D'];
  const rows = [1, 2, 3, 4];

  const getCellValue = (col: string, row: number): string => {
    const cellId = `${col}${row}`;
    const value = cells[cellId] || '';
    
    // Simple formula evaluation
    if (value.startsWith('=')) {
      try {
        const formula = value.slice(1);
        // Replace cell references with values
        let evalFormula = formula;
        for (const c of columns) {
          for (const r of rows) {
            const refId = `${c}${r}`;
            if (refId !== cellId && cells[refId] && !cells[refId].startsWith('=')) {
              const numValue = parseFloat(cells[refId]);
              if (!isNaN(numValue)) {
                evalFormula = evalFormula.replace(new RegExp(refId, 'g'), numValue.toString());
              }
            }
          }
        }
        // Evaluate simple arithmetic
        const result = Function(`"use strict"; return (${evalFormula})`)();
        return isNaN(result) ? '#ERROR' : result.toString();
      } catch {
        return '#ERROR';
      }
    }
    
    return value;
  };

  const updateCell = (col: string, row: number, value: string) => {
    const cellId = `${col}${row}`;
    setCells(prev => ({ ...prev, [cellId]: value }));
  };

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-muted-foreground">Excel Calculator</div>
      <div className="grid grid-cols-5 gap-1 text-xs">
        <div></div>
        {columns.map(col => (
          <div key={col} className="text-center font-medium text-muted-foreground p-1">
            {col}
          </div>
        ))}
        {rows.map(row => (
          <div key={row} className="contents">
            <div className="text-center font-medium text-muted-foreground p-1">{row}</div>
            {columns.map(col => (
              <Input
                key={`${col}${row}`}
                value={cells[`${col}${row}`] || ''}
                onChange={(e) => updateCell(col, row, e.target.value)}
                className="h-8 text-xs p-1"
                placeholder={getCellValue(col, row) !== (cells[`${col}${row}`] || '') ? getCellValue(col, row) : ''}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">
        Use formulas like =A1+B2, =100*1.1, etc.
      </div>
    </div>
  );
};

export default ExcelUtility;