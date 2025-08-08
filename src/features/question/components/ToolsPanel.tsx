import { Card, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NotesUtility from '@/components/NotesUtility';
import DrawingCanvas from '@/components/DrawingCanvas';
import Calculator from '@/components/Calculator';

const ToolsPanel = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notes">🗒️ Notes</TabsTrigger>
            <TabsTrigger value="scribble">✏️ Draw</TabsTrigger>
            <TabsTrigger value="calculator">🧮 Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="notes" className="mt-4">
            <NotesUtility />
          </TabsContent>

          <TabsContent value="scribble" className="mt-4">
            <DrawingCanvas />
          </TabsContent>

          <TabsContent value="calculator" className="mt-4">
            <Calculator />
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
};

export default ToolsPanel;
